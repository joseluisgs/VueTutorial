// Nuestro servicio
import Service from './Service';

// Recurso a acceder
const resource = 'posts';

export default {
  get() {
    return Service.get(resource);
  },
};
