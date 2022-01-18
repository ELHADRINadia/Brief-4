const API = "server/api";

console.log(document.getElementById("form-add"));

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
  })
    .then((res) => res.json())
    .then((response) => console.log(response))
    .catch((err) => console.log(err));
};
