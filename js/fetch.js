const API = "server/api/products.php";

export default {
  getAll: async () => {
    try {
      const response = await fetch(API);
      return response.json();
    } catch (err) {
      console.log(err);
    }
  },
  getOne: async (id) => {
    try {
      const response = await fetch(`${API}?id=${id}`);
      return response.json();
    } catch (err) {
      console.log(err);
    }
  },
  create: async (product) => {
    try {
      const response = await fetch(API, {
        method: "POST",
        body: product,
      });
      return response.json();
    } catch (error) {
      console.log(error);
    }
    // fetch(API, {
    //   method: "POST",
    //   body: product,
    //   // headers: {
    //   //   "Content-Type": "application/json",
    //   // },
    // })
    //   .then((res) => res.json())
    //   .then((response) => console.log(response))
    //   .catch((err) => console.log(err));
  },
  update: async (product) => {
    try {
      const response = await fetch(API, {
        method: "PUT",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    } catch (error) {
      console.log(error);
    }
    // fetch(API, {
    //   method: "PUT",
    //   body: JSON.stringify(product),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((response) => console.log(response))
    //   .catch((err) => console.log(err));
  },
  delete: async (id) => {
    try {
      const response = await fetch(API, {
        method: "DELETE",
        body: JSON.stringify({ id }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    } catch (error) {
      console.log(error);
    }

    // fetch(API, {
    //   method: "DELETE",
    //   body: JSON.stringify({ id }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((response) => console.log(response))
    //   .catch((err) => console.log(err));
  },
};

// window.addEventListener("DOMContentLoaded", () => {
//   const API = "server/api/products.php";

//   const getProducts = () => {
//     fetch(API)
//       .then((res) => res.json())
//       .then((response) => console.log(response))
//       .catch((err) => console.log(err));
//   };
//   const createProduct = (product) => {
//     fetch(API, {
//       method: "POST",
//       body: product,
//       // headers: {
//       //   "Content-Type": "application/json",
//       // },
//     })
//       .then((res) => res.json())
//       .then((response) => console.log(response))
//       .catch((err) => console.log(err));
//   };
//   const updateProduct = (product) => {
//     fetch(API, {
//       method: "PUT",
//       body: JSON.stringify(product),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((response) => console.log(response))
//       .catch((err) => console.log(err));
//   };
//   const deleteProduct = (id) => {
//     fetch(API, {
//       method: "DELETE",
//       body: JSON.stringify({ id }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((response) => console.log(response))
//       .catch((err) => console.log(err));
//   };

//   const form = document.querySelector("#add-product-form");

//   form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     let formData = new FormData();
//     const name = document.querySelector("#name").value;
//     const price = document.querySelector("#price").value;
//     const quantity = document.querySelector("#quantity").value;
//     // const category = document.querySelector("#category").value;
//     const category = 1;
//     const image = document.querySelector("#image").files[0];
//     const data = {
//       //   id: 1,
//       name,
//       price,
//       quantity,
//       category,
//       image,
//     };

//     formData.append("name", name);
//     formData.append("price", price);
//     formData.append("quantity", quantity);
//     formData.append("category", category);
//     formData.append("image", image);

//     // getProducts();
//     createProduct(formData);
//     // updateProduct(data);
//     // deleteProduct(63);
//   });
// });
