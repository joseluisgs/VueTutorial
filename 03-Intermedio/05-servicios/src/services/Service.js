import axios from 'axios';
// Aquí exponemos la dirección de la API. buenas práticas en VUE
// De esta manera aumentamos la reusabilidad porque nos podemos levar estos ficheros a los proyectos que necesitemos
const baseURL = 'https://randomuser.me/api/';

export default axios.create({
  baseURL,
});
