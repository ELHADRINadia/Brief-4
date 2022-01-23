import api from "./fetch.js";
import components from "./components.js";
import modals from "./modals.js";

// const getData = async () =>
//   await fetch("./js/api.json", {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then((response) => response.json());

/* Products Page */

const data = await api.getAll();

const refresh = async () => {
  const data = await api.getAll();
  console.log(data);
  renderProducts(data);
};

const renderProducts = ({ products, count }) => {
  const container = document.querySelector(".products");
  if (count > 0) {
    let html = "";
    products.forEach((product) => (html += components.Product(product)));
    container.innerHTML = html;

    modals.startModals(refresh);
  } else {
    container.innerHTML = components.Empty();
  }
};

renderProducts(data);

// Filter Products

//Filter by searching product name
const search = document.querySelector("#search");
search.oninput = () => {
  const searched = data.products.filter(({ name }) =>
    name.includes(search.value)
  );
  renderProducts({ products: searched, count: searched.length });
};

//Filter by category
const categorySelector = document.querySelector("#category-filter");
categorySelector.onchange = () => {
  if (categorySelector.value != "all") {
    const filtered = data.products.filter(({ category }) =>
      category.includes(categorySelector.value)
    );
    renderProducts({ products: filtered, count: filtered.length });
  } else renderProducts(data);
};

// Sorting
// const sort = document.querySelector("#sort");
// sort.onchange = () => {
//   if (sort.value != "all") {
//     const filtered = products.filter(({ category }) =>
//       category.includes(sort.value)
//     );
//     renderProducts(filtered);
//   } else renderProducts(products);
// };

//Statistics Page

import "https://cdn.jsdelivr.net/npm/chart.js"; //chart js

const chartData = {
  labels: ["Phones", "Laptops", "Tablets"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
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
  });
});
