const getData = async() =>
    await fetch("./js/api.json", {
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json());

/* Products Page */

const { products } = await getData();

const renderProduct = (product) => /*html*/ `
  <div class="product">
      <img src=${product.image} alt=${product.name} class="img" />
      <h3 class="product-name">${product.name}</h3>
      <div class="product-quantity">
          <p>${product.quantity}</p>
          <i class="gg-bookmark"></i>
      </div>
      <div class="product-buttons">
          <div class="product-price">
              <p>${product.price}</p>
              <i class="gg-dollar"></i>
          </div>
          <div class="buttons">
              <i class="gg-trash delete-btn" id=${product.id} ></i>
              <i class="gg-pen edit-btn" onclick="showModal(${product.id})" ></i>
          </div>
      </div>
  </div>`;

const renderProducts = (products) => {
    const container = document.querySelector(".products");
    let html = "";
    products.forEach((product) => (html += renderProduct(product)));
    container.innerHTML = html;
};

renderProducts(products);

// Filter Products

//Filter by searching product name
const search = document.querySelector("#search");
search.oninput = () => {
    const searched = products.filter(({ name }) => name.includes(search.value));
    renderProducts(searched);
};

//Filter by category
const categorySelector = document.querySelector("#category");
categorySelector.onchange = () => {
    if (categorySelector.value != "all") {
        const filtered = products.filter(({ category }) =>
            category.includes(categorySelector.value)
        );
        renderProducts(filtered);
    } else renderProducts(products);
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

const data = {
    labels: ["Phones", "Laptops", "Tablets"],
    datasets: [{
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
    }, ],
};

new Chart("chart", {
    type: "pie",
    data,
});

// Modals

// const buttons = document.querySelectorAll(".delete-btn");

const deleteProductButtons = document.querySelectorAll(".delete-btn");
const editProductButtons = document.querySelectorAll(".edit-btn");

const showModal = (modal, productId) => {
    const modalContent = document.querySelector(".modal-content");
    modal.style.display = "flex";
    // const renderProductToDelete = (product) => /*html*/ `
    // <div>
    //     <img src=${product.image} alt=${product.name} />
    //     <h3>${product.name}</h3>
    //     <div>
    //         <p>${product.quantity}</p>
    //         <i class="gg-bookmark"></i>
    //             <p>${product.price}</p>
    //             <i class="gg-dollar"></i>
    //     </div>
    // </div>`;
    // modalContent.innerHTML = renderProductToDelete(
    //   products.find((product) => product.id == productId)
    // );
};
const hideModals = () => {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => (modal.style.display = "none"));
};

deleteProductButtons.forEach(
    (btn) =>
    (btn.onclick = function() {
        const modal = document.querySelector(".delete-product-modal");
        showModal(modal, this.id);
    })
);
editProductButtons.forEach(
    (btn) =>
    (btn.onclick = function() {
        const modal = document.querySelector(".edit-product-modal");
        showModal(modal, this.id);
    })
);

window.onclick = function(event) {
    const deleteProductModal = document.querySelector(".delete-product-modal");
    const editProductModal = document.querySelector(".edit-product-modal");

    if (event.target == deleteProductModal || event.target == editProductModal) {
        hideModals();
    }
};

// Delete Product Modal

// http://localhost/local.dev/

const sendData = async() =>
    fetch("http://localhost/local.dev/", {
        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: {
            title: "foo",
            body: "bar",
            userId: 1,
        },

        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });