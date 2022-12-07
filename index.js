
//Constante Iniciales
const main = document.getElementById('main');
const contenidoInicial = document.getElementById('contenido-1');
const mainBtn = document.getElementById('main-btn');

//constantes para almacenar contenido
const contenido2 = document.getElementById('contenido-2');

//const del elemento prueba
const prueba = document.getElementById('prueba');



main.addEventListener('click', (e) => {

  //Para confirmar se el click es el btn principal
  if (e.target === mainBtn) {
    contenidoInicial.remove();

    contenido2.append(agregarNota);

  }


  //para confirmar si el button es de borrar
  if(e.target.id === 'borrar-nota') {
    let checkClick = confirm("Seguro que quieres borrar?");

    if(checkClick == true) {
      contenidoInicial.remove();

    }
  }

});

//Crear elemento con HTML
const agregarNota = document.createElement('div');
agregarNota.innerHTML = `

<form id="main-form">
  <div class="div--form">

   <h2 class="div--form__h2">Mi Primera Nota</h2>

    <div class="div--form__inp">

      <input
        type="text"
        name="titulo"
        id="titulo"
        class="inp1"
        placeholder="Agregar Nota"
      />
    

      
    </div>
  
    <div class="button2">

      <button type="button" id="borrar-nota">
      <span><i class="fa-solid fa-trash-can"></i></span>Borrar Nota
      </button>

      <button type="button" id="agregar-fecha">
      <span><i class="fa-regular fa-calendar-days"></i></span>Agregar Fecha
      </button>

    </div>

  </div>
</form>

`;

//Crear una constante para boton borrar
const btnDeBorrar = document.getElementById('borrar-nota');

//Agregar un evento listener al btn



//creacion de un eventlistener global  para la segunda parte del drilling confirma etec.
