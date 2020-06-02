/**
 * Mocking client-server processing
 * Simulamos el acceso a un servidor con servicios REST
 */
const listProducts = [
  {
    id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2,
  },
  {
    id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10,
  },
  {
    id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5,
  },
  {
    id: 4, title: 'Titulos a Gogo', price: 19.99, inventory: 0,
  },
];

export default {
  getProducts(cb) {
    setTimeout(() => cb(listProducts), 100);
  },

  buyProducts(products, cb, errorCb) {
    setTimeout(() => {
      // simulate random checkout failure.
      if (Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1) return cb();
      return errorCb();
    }, 100);
  },
};
