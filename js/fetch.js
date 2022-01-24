const API = "server/api/products.php";

export default {
<<<<<<< HEAD
    getAll: async() => {
        try {
            const response = await fetch(API);
            return response.json();
        } catch (err) {
            console.log(err);
        }
    },
    getOne: async(id) => {
        try {
            const response = await fetch(`${API}?id=${id}`);
            return response.json();
        } catch (err) {
            console.log(err);
        }
    },
    create: async(product) => {
        try {
            const response = await fetch(API, {
                method: "POST",
                body: product,
            });
            return response.json();
        } catch (error) {
            console.log(error);
        }
    },
    update: async(product) => {
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
    },
    delete: async(id) => {
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
    },
};
=======
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
  getAllSorted: async (sortedBy, order) => {
    try {
      const response = await fetch(
        `${API}?sorted_by=${sortedBy}&order=${order}`
      );
      return response.json();
    } catch (err) {
      console.log(err);
    }
  },
  getSearchResults: async (search) => {
    try {
      const response = await fetch(`${API}?search=${search}`);
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
  },
  checkUser: async (username, password) => {
    try {
      const response = await fetch(API, {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json();
    } catch (error) {
      console.log(error);
    }
  },
};
>>>>>>> 445ae1ab5224f13772a533f1dbd3e114625c70ac
