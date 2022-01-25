import api from "./fetch.js";
import components from "./components.js";
import modals from "./modals.js";

/* Products Page */

const data = await api.getAll();

const refresh = async () => {
  const data = await api.getAll();
  renderProducts(data);
  renderStatistics(data);
};

const renderProducts = (
  { products, count },
  emptyMessage = "No Products are added yet."
) => {
  const container = document.querySelector(".products");
  if (count > 0) {
    let html = "";
    products.forEach((product) => (html += components.Product(product)));
    container.innerHTML = html;

    modals.startModals(refresh);
  } else {
    container.innerHTML = components.Empty(emptyMessage);
  }
};

renderProducts(data);

// Filter Products

//Filter by searching product name
const search = document.querySelector("#search");
search.oninput = () => {
  api.getSearchResults(search.value).then((results) => {
    renderProducts(results, results?.message);
  });
};

//Filter by category
const category = document.querySelector("#category-filter");
category.onchange = () => {
  if (category.value != "all") {
    api.getByCategory(category.value).then((results) => {
      renderProducts(results, results?.message);
    });
  } else renderProducts(data);
};

//Sorting
const sort = document.querySelector("#sort");
sort.onchange = ({ target: { value } }) => {
  const [sortedBy, order] = value.split(":");
  api.getAllSorted(sortedBy, order).then((results) => {
    renderProducts(results);
  });
};

//Statistics Page

import "https://cdn.jsdelivr.net/npm/chart.js"; //chart js

const renderStatistics = ({ products, count }) => {
  document.querySelector(".statistics-total-products").textContent = count;
  let totalCost = 0;
  products.forEach(({ quantity, price }) => {
    totalCost += Number(quantity) * Number(price);
  });
  let totalQuantities = 0;
  products.forEach(({ quantity }) => {
    totalQuantities += Number(quantity);
  });
  document.querySelector(".statistics-total-cost").textContent = totalCost;
  document.querySelector(".statistics-total-quantities").textContent =
    totalQuantities;
};
renderStatistics(data);
const chartData = {
  labels: ["Phones", "Laptops", "Tablets"],
  datasets: [
    {
      label: "Statistics",
      data: [
        data.products.filter(({ category }) => category == "phones").length,
        data.products.filter(({ category }) => category == "laptops").length,
        data.products.filter(({ category }) => category == "tablets").length,
      ],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      color: "#fff",
      hoverOffset: 4,
    },
  ],
};

new Chart("chart", {
  type: "pie",
  data: chartData,
});
// Add Product Page

const form = document.querySelector("#add-product-form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  let formData = new FormData();
  const name = document.querySelector("#name").value;
  const price = document.querySelector("#price").value;
  const quantity = document.querySelector("#quantity").value;
  const category = document.querySelector("#category").value;
  const image = document.querySelector("#image").files[0];

  formData.append("name", name);
  formData.append("price", price);
  formData.append("quantity", quantity);
  formData.append("category", category);
  formData.append("image", image);

  api.create(formData).then((response) => {
    refresh();
    console.log(response);
  });
});
