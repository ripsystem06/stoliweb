const busqueda = document.querySelector('.busqueda');
const input = busqueda.querySelector('input');

busqueda.addEventListener('click', () => {
  input.focus();
});

input.addEventListener('input', (e) => {
  const valor = e.target.value;
  // Aquí puedes agregar tu código para realizar la búsqueda con el valor
  console.log(`Buscando: ${valor}`);
});