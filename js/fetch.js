window.addEventListener("DOMContentLoaded", () => {
    const API = "server/api/products.php";

    const getProducts = () => {
        fetch(API)
            .then((res) => res.json())
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    };
    const createProduct = (product) => {
        fetch(API, {
                method: "POST",
                body: JSON.stringify(product),
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then((res) => res.json())
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    };
    const updateProduct = (product) => {
        fetch(API, {
                method: "PUT",
                body: JSON.stringify(product),
                headers: {
                    "Content-Type": "application/json",

                },
            })
            .then((res) => res.json())
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    };
    const deleteProduct = (product) => {
        fetch(API, {
                method: "DELETE",
                body: JSON.stringify(product),
                headers: {
                    "Content-Type": "application/json",

                },
            })
            .then((res) => res.json())
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    };
    const form = document.querySelector("#add-product-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.querySelector("#name").value;
        const price = document.querySelector("#price").value;
        const quantity = document.querySelector("#quantity").value;
        // const category = document.querySelector("#category").value;
        const category = 1;
        const image = document.querySelector("#image").value;
        const data = {
            id: 0,
            name,
            price,
            quantity,
            category,
            image,
        };

        {
            id: 2
        }
        // createProduct(data);
        // updateProduct(data);
        // deleteProduct

    });
});