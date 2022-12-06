
//Constante Iniciales
const main = document.getElementById('main');
const contenidoInicial = document.getElementById('contenido-1');
const mainBtn = document.getElementById('main-btn');

//const del elemento prueba
const prueba = document.getElementById('prueba');

main-Btn.addEventListener('click', (e) => {
  console.log('Me fui')
  contenidoInicial.remove();

  prueba.classList.add('ocultar');
});