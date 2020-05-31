// Librería
import axios from 'axios';

// EndPoint a consumir
const baseURL = 'https://jsonplaceholder.typicode.com/';

export default axios.create({
  baseURL,
});
