import axios from './config';

export default {
  todos: {
    baseUrl: '/todos',
    getAll () {
      return axios.get(this.baseUrl);
    },
    findById (id) {
      return axios.get(`${this.baseUrl}/${id}`);
    },
    create (content) {
      return axios.post(this.baseUrl, { content });
    },
    update (todo) {
      return axios.put(`${this.baseUrl}/${todo.id}`, { todo });
    },
    delete (id) {
      return axios.delete(`${this.baseUrl}/${id}`);
    }
  },
}