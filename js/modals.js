import api from "./fetch.js";
import components from "./components.js";

const modals = {
    showDeleteProductModal: async(productId, refresh) => {
        const modal = document.querySelector(".delete-product-modal");
        const modalContent = document.querySelector(
            `.delete-product-modal-content`
        );
        modal.style.display = "flex";

        const { product } = await api.getOne(productId);

        modalContent.innerHTML = components.ProductToDelete(product);

        document.querySelector(".close-modal-btn").onclick = () =>
            modals.hideModal(modal);

        document.querySelector(".delete-product").onclick = () => {
            api.delete(productId).then(() => {
                refresh();
            });
            modals.hideModal(modal);
        };
    },
    showEditProductModal: async(productId, refresh) => {
        const modal = document.querySelector(".edit-product-modal");
        const modalContent = document.querySelector(`.edit-product-modal-content`);

        modal.style.display = "flex";

        const { product } = await api.getOne(productId);

        modalContent.innerHTML = components.ProductToEdit(product);
        document.querySelector("#product-to-edit-name").value = product.name;
        document.querySelector("#product-to-edit-price").value = product.price;
        document.querySelector("#product-to-edit-quantity").value =
            product.quantity;
        document.querySelector("#product-to-edit-category").value =
            product.category;

        const editProductForm = document.querySelector("#edit-product-form");

        document.querySelector(".close-modal-btn").onclick = () =>
            modals.hideModal(modal);

        editProductForm.addEventListener("submit", (event) => {
            event.preventDefault();
            api
                .update({
                    id: productId,
                    name: document.querySelector("#product-to-edit-name").value,
                    price: document.querySelector("#product-to-edit-price").value,
                    quantity: document.querySelector("#product-to-edit-quantity").value,
                    category: document.querySelector("#product-to-edit-category").value,
                })
                .then(() => {
                    refresh();
                });
            modals.hideModal(modal);
        });
    },
    hideModal: (modal) => {
        modal.style.display = "none";
    },
    startModals: (refresh) => {
        // Delete Product Modal

        const deleteProductButtons = document.querySelectorAll(".delete-btn");

        deleteProductButtons.forEach(
            (btn) =>
            (btn.onclick = function() {
                modals.showDeleteProductModal(this.id, refresh);
            })
        );

        // Edit Product Modal

        const editProductButtons = document.querySelectorAll(".edit-btn");

        editProductButtons.forEach(
            (btn) =>
            (btn.onclick = function() {
                modals.showEditProductModal(this.id, refresh);
            })
        );

        window.onclick = function(event) {
            const deleteProductModal = document.querySelector(
                ".delete-product-modal"
            );
            const editProductModal = document.querySelector(".edit-product-modal");

            if (
                event.target == deleteProductModal ||
                event.target == editProductModal
            ) {
                modals.hideModal(deleteProductModal);
                modals.hideModal(editProductModal);
            }
        };
    },
};

export default modals;