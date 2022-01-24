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

const refresh = async() => {
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
    data: chartData,
});

// Add Product Page

const form = document.querySelector("#add-product-form");
form.addEventListener("submit", (event) => {
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

















// const API = "server/api/products.php";

// const api = {
//     getAll: async() => {
//         try {
//             const response = await fetch(API);
//             return response.json();
//         } catch (err) {
//             console.log(err);
//         }
//     },
//     getOne: async(id) => {
//         try {
//             const response = await fetch(`${API}?id=${id}`);
//             return response.json();
//         } catch (err) {
//             console.log(err);
//         }
//     },
//     create: async(product) => {
//         try {
//             const response = await fetch(API, {
//                 method: "POST",
//                 body: product,
//             });
//             return response.json();
//         } catch (error) {
//             console.log(error);
//         }
//     },
//     update: async(product) => {
//         try {
//             const response = await fetch(API, {
//                 method: "PUT",
//                 body: JSON.stringify(product),
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             });
//             return response.json();
//         } catch (error) {
//             console.log(error);
//         }
//     },
//     delete: async(id) => {
//         try {
//             const response = await fetch(API, {
//                 method: "DELETE",
//                 body: JSON.stringify({ id }),
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//             });
//             return response.json();
//         } catch (error) {
//             console.log(error);
//         }
//     },
// };
// const modals = {
//     showDeleteProductModal: async(productId, refresh) => {
//         const modal = document.querySelector(".delete-product-modal");
//         const modalContent = document.querySelector(
//             `.delete-product-modal-content`
//         );
//         modal.style.display = "flex";

//         const { product } = await api.getOne(productId);

//         modalContent.innerHTML = components.ProductToDelete(product);
//         document.querySelector(".delete-product").onclick = () => {
//             api.delete(productId).then(() => {
//                 refresh();
//             });
//             modals.hideModal(modal);
//         };
//     },
//     showEditProductModal: async(productId, refresh) => {
//         const modal = document.querySelector(".edit-product-modal");
//         const modalContent = document.querySelector(`.edit-product-modal-content`);

//         modal.style.display = "flex";

//         const { product } = await api.getOne(productId);

//         modalContent.innerHTML = components.ProductToEdit(product);
//         document.querySelector("#product-to-edit-name").value = product.name;
//         document.querySelector("#product-to-edit-price").value = product.price;
//         document.querySelector("#product-to-edit-quantity").value =
//             product.quantity;
//         document.querySelector("#product-to-edit-category").value =
//             product.category;
//         const editProductForm = document.querySelector("#edit-product-form");
//         editProductForm.addEventListener("submit", (event) => {
//             event.preventDefault();
//             api
//                 .update({
//                     id: productId,
//                     name: document.querySelector("#product-to-edit-name").value,
//                     price: document.querySelector("#product-to-edit-price").value,
//                     quantity: document.querySelector("#product-to-edit-quantity").value,
//                     category: document.querySelector("#product-to-edit-category").value,
//                 })
//                 .then(() => {
//                     refresh();
//                 });
//             modals.hideModal(modal);
//         });
//     },
//     hideModal: (modal) => {
//         modal.style.display = "none";
//     },
//     startModals: (refresh) => {
//         // Delete Product Modal

//         const deleteProductButtons = document.querySelectorAll(".delete-btn");

//         deleteProductButtons.forEach(
//             (btn) =>
//             (btn.onclick = function() {
//                 modals.showDeleteProductModal(this.id, refresh);
//             })
//         );

//         // Edit Product Modal

//         const editProductButtons = document.querySelectorAll(".edit-btn");

//         editProductButtons.forEach(
//             (btn) =>
//             (btn.onclick = function() {
//                 modals.showEditProductModal(this.id, refresh);
//             })
//         );

//         window.onclick = function(event) {
//             const deleteProductModal = document.querySelector(
//                 ".delete-product-modal"
//             );
//             const editProductModal = document.querySelector(".edit-product-modal");

//             if (
//                 event.target == deleteProductModal ||
//                 event.target == editProductModal
//             ) {
//                 modals.hideModal(deleteProductModal);
//                 modals.hideModal(editProductModal);
//             }
//         };
//     },
// };

// const components = {
//     Product: (product) => /*html*/ `
//     <div class="product">
//         <img src=${"./server/uploads/" + product.image} alt=${
//       product.name
//     } class="img" />
//         <h3 class="product-name">${product.name}</h3>
//         <div class="product-quantity">
//             <p>${product.quantity}</p>
//             <i class="gg-bookmark"></i>
//         </div>
//         <div class="product-buttons">
//             <div class="product-price">
//                 <p>${product.price}</p>
//                 <i class="gg-dollar"></i>
//             </div>
//             <div class="buttons">
//                 <i class="gg-trash delete-btn" id=${product.id} ></i>
//                 <i class="gg-pen edit-btn" id=${product.id} ></i>
//             </div>
//         </div>
//     </div>`,
//     ProductToEdit: (product) => /*html*/ `
//       <img src=${"./server/uploads/" + product.image} alt=${
//       product.name
//     } class="img" />
//       <form id="edit-product-form">
//         <div class="inputs">
//           <div class="input">
//             <label for="product-to-edit-name">Name</label>
//             <input type="text" id="product-to-edit-name"/>
//           </div>
//           <div class="input">
//             <label for="product-to-edit-price">Price</label>
//             <input type="text" id="product-to-edit-price"/>
//           </div>
//           <div class="input">
//             <label for="product-to-edit-quantity">Quantity</label>
//             <input type="text" id="product-to-edit-quantity"/>
//           </div>
//           <div class="input">
//             <label for="product-to-edit-category">Category</label>
//             <select id="product-to-edit-category">
//               <option value="phones">Phones</option>
//               <option value="laptops">Laptops</option>
//               <option value="tablets">Tablets</option>
//             </select>
//           </div>
//           <input type="submit" value="Save" />
//         </div>
//       </form>`,
//     ProductToDelete: (product) => /*html*/ `
//       <img src=${"./server/uploads/" + product.image} alt=${
//       product.name
//     } class="img" />
//       <div class="product-details">
//         <h3 class="product-name">${product.name}</h3>
//         <div class="product-info">
//           <div class="product-quantity">
//             <p>${product.quantity}</p>
//             <i class="gg-bookmark"></i>
//           </div>
//           <div class="product-price">
//               <p>${product.price}</p>
//               <i class="gg-dollar"></i>
//           </div>
//         </div>
//         <div class="button delete-product">
//             <p class="title">Delete</p>
//             <i class="gg-trash" ></i>
//           </div>
//       </div>`,
//     Empty: () => /*html*/ `<h3 class="empty">No Products are added yet.</h3>`,
// };


// // const getData = async () =>
// //   await fetch("./js/api.json", {
// //     headers: {
// //       "Content-Type": "application/json",
// //     },
// //   }).then((response) => response.json());

// /* Products Page */

// const data = [];
// api.getAll().then((response) => data = response);
// console.log(data);

// const refresh = () => {
//     api.getAll().then((response) => renderProducts(response));
//     // console.log(data);
//     // renderProducts(data);
// };

// const renderProducts = ({ products, count }) => {
//     const container = document.querySelector(".products");
//     if (count > 0) {
//         let html = "";
//         products.forEach((product) => (html += components.Product(product)));
//         container.innerHTML = html;

//         modals.startModals(refresh);
//     } else {
//         container.innerHTML = components.Empty();
//     }
// };

// renderProducts(data);

// // Filter Products

// //Filter by searching product name
// const search = document.querySelector("#search");
// search.oninput = () => {
//     const searched = data.products.filter(({ name }) =>
//         name.includes(search.value)
//     );
//     renderProducts({ products: searched, count: searched.length });
// };

// //Filter by category
// const categorySelector = document.querySelector("#category-filter");
// categorySelector.onchange = () => {
//     if (categorySelector.value != "all") {
//         const filtered = data.products.filter(({ category }) =>
//             category.includes(categorySelector.value)
//         );
//         renderProducts({ products: filtered, count: filtered.length });
//     } else renderProducts(data);
// };

// // Sorting
// // const sort = document.querySelector("#sort");
// // sort.onchange = () => {
// //   if (sort.value != "all") {
// //     const filtered = products.filter(({ category }) =>
// //       category.includes(sort.value)
// //     );
// //     renderProducts(filtered);
// //   } else renderProducts(products);
// // };

// //Statistics Page

// // import "https://cdn.jsdelivr.net/npm/chart.js"; //chart js

// const chartData = {
//     labels: ["Phones", "Laptops", "Tablets"],
//     datasets: [{
//         label: "My First Dataset",
//         data: [300, 50, 100],
//         backgroundColor: [
//             "rgb(255, 99, 132)",
//             "rgb(54, 162, 235)",
//             "rgb(255, 205, 86)",
//         ],
//         hoverOffset: 4,
//     }, ],
// };

// // new Chart("chart", {
// //     type: "pie",
// //     data: chartData,
// // });

// // Add Product Page

// const form = document.querySelector("#add-product-form");
// form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     let formData = new FormData();
//     const name = document.querySelector("#name").value;
//     const price = document.querySelector("#price").value;
//     const quantity = document.querySelector("#quantity").value;
//     const category = document.querySelector("#category").value;
//     const image = document.querySelector("#image").files[0];

//     formData.append("name", name);
//     formData.append("price", price);
//     formData.append("quantity", quantity);
//     formData.append("category", category);
//     formData.append("image", image);

//     api.create(formData).then((response) => {
//         refresh();
//     });
// });