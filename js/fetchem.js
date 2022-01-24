const API = "server/api/employé.php";

export default {
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
    create: async(employe) => {
        try {
            const response = await fetch(API, {
                method: "POST",
                body: employe,
            });
            return response.json();
        } catch (error) {
            console.log(error);
        }
    },
    update: async(employé) => {
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