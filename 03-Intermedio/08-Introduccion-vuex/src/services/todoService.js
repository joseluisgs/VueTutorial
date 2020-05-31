// fichero donde anunciams nuestras operaciones de servicios
import Service from './Service';

// Recurso a acceder
const resource = 'todos';

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
