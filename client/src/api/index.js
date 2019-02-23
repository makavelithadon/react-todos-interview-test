import config from "./config";

export default {
  todos: {
    baseUrl: "/todos",
    async getAll() {
      const response = await fetch(this.baseUrl, config);
      return await response.json();
    },
    async findById(id) {
      const response = await fetch(`${this.baseUrl}/${id}`, config);
      return await response.json();
    },
    async create(content) {
      const response = await fetch(this.baseUrl, {
        ...config,
        method: "POST",
        body: JSON.stringify({ content })
      });
      return await response.json();
    },
    async update(todo) {
      const response = await fetch(`${this.baseUrl}/${todo.id}`, {
        ...config,
        method: "PUT",
        body: JSON.stringify({ todo })
      });
      return await response.json();
    },
    async delete(id) {
      const response = await fetch(`${this.baseUrl}/${id}`, { ...config, method: "DELETE" });
      return await response.json();
    }
  }
};
