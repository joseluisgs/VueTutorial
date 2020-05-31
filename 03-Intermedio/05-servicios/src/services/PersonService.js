// De esta manera tenemos aquí todas las operaciones sobre un recuerso. Es como nos indica Nuxt (y por lo tanto buenas práticas en Vue)
import Service from './Service';

const resource = ''; // Seria el directorio del servicio

// Funciones del servicio
export default {
  get() {
    return Service.get(resource);
  },

  create(data) {
    return Service.post(resource, data);
  },

  delete(id) {
    return Service.delete(resource, id);
  },
};
