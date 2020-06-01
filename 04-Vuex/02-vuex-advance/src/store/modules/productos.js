// Store o data de productos, pero aparecerá como un campo calculado
// Son los productos disponibles en nuestra tienda
const productos = [
  { nombre: 'Steam Link', precio: 50 },
  { nombre: 'Steam Controller', precio: 59 },
  { nombre: 'Axiom Verge', precio: 17 },
];

// Mutaciones
const mutations = {
  // No tocamos state, si no productos directamente, porque aún no está exportado
  anadirProducto: (state, producto) => productos.unshift(producto),
};

// Exportación del estado y mutaciones como modulo
export default {
  state: productos,
  mutations,
};
