import config from "./config";
import checkStatus from "./helpers/check-status";

export default {
  todosLists: {
    baseUrl: "/todosLists",
    async getAll() {
      const response = await fetch(this.baseUrl, config);
      return response.json();
    },
    async findById(todosListId) {
      const response = await fetch(`${this.baseUrl}/${todosListId}`, config);
      if (response.ok || response.status === 404) return await response.json();
      const obj = await response.json();
      throw new Error(obj);
    }
  },
  todos: {
    baseUrl: "/todos",
    async getAll(todosListId) {
      const response = await fetch(`${this.baseUrl}?todosList=${todosListId}`, config);
      if (response.ok) return await response.json();
      throw await response.json();
    },
    async findById(id) {
      const response = await fetch(`${this.baseUrl}/${id}`, config);
      return await response.json();
    },
    async create(content, todosListId) {
      const response = await fetch(this.baseUrl, {
        ...config,
        method: "POST",
        body: JSON.stringify({ content, todosListId })
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
