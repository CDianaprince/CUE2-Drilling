const main = document.getElementById('main');
const contenidoInicial = document.getElementById('contenido-1');
const mainBtn = document.getElementById('main-btn');



const agregarNota = document.createElement('div');
agregarNota.innerHTML = `

<form id="main-form"></form>
<input
  type="text"
  name="titulo"
  id="titulo"
  placeholder="Agregar tirulo"
/>
<input
  type="text"
  name="titulo"
  id="titulo"
  placeholder="Agregar tu nota"
/>

<button type="button" id="borrar-nota">Borrar Nota</button>
<button type="button" id="agregar-fecha">Agregar Fecha</button>
</form>-->

`;

const btnDeBorrar = document.getElementById('borrar-nota');

btnDeBorrar.addEventListener('clic', (e) => {
  alert('hola!')
});

main.addEventListener('click', (e) => {

  //Para confirmar se el click es el btn principal
  if (e.target === mainBtn) {
    contenidoInicial.remove();

    contenido2.append(agregarNota);

  }


  //para confirmar si el button es de borrar
  if(e.target. id === 'borrar-nota') {
    let checkClick = confirm("Seguro que quieres borrar?");

    if(checkClick == true) {
      contenidoInicial.remove();

    }
  }

});

