import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {'X-Custom-Header': 'my-awesomecustom-create-react-app-header'}
});