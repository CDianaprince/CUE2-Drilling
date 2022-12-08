
//Constante Iniciales
const main = document.getElementById('main');
const contenidoInicial = document.getElementById('contenido-1');
const mainBtn = document.getElementById('main-btn');

//constantes para almacenar contenido
const contenido2 = document.getElementById('contenido-2');
const contenidoNotas = document.getElementById('cont-notas');

//Crear una variable global para almacenar elementos
let mainForm;

//Variables de forma globales
let titulo;
let nota;
let fecha;

main.addEventListener('click', (e) => {

  //Para confirmar se el click es el btn principal
  if (e.target === mainBtn) {
    contenidoInicial.remove();

    contenido2.append(agregarNota);

    //Asignar a mainForm el elemento de forma
    mainForm = document.getElementById('main-form');

  }


  //para confirmar si el button es de borrar
  if(e.target.id === 'borrar-nota') {
    let checkClick = confirm("Seguro que quieres borrar?");

    if(checkClick == true) {
      contenido2.remove();

    }
  }

  //Para encontrar el elemento submit de la forma
  if(e.target.id === 'agregar-fecha') {
    //crear escuchador de eventos para click en el buton agregar
    mainForm.addEventListener('submit', (event) => {
      //Evitar que la accion por defecto pase
      event.preventDefault();

      //Crear constantes de los inputs para obtener informacion de la forma
      titulo = document.getElementById('titulo');
      nota = document.getElementById('nota');
      fecha = document.getElementById('fecha');
      

      //Crear objeto para guardar informacion
      const formulario = {
        titulo1: titulo.value,
        notaText: nota.value,
        fecha1: fecha.value,

      }


     //Decontruir el objeto
     const { titulo1, notaText, fecha1 } = formulario;

     //Creo constante con informacion
     const notaHtmlConInfo = agregarNotaDinamico(titulo1, notaText, fecha1);

     //Insertar HTML nuevo
     contenidoNotas.append(notaHtmlConInfo);

     //Reiniciar los valores de la forma
     titulo.value = '';
     nota.value = '';
     fecha.value = '';


    });


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
        class="inp2"
        placeholder="Agregar titulo"
      />
      <input
        type="text"
        name="titulo"
        id="nota"
        class="inp1"
        placeholder="Agregar Nota"
      />
      <input
        type="text"
        name="titulo"
        id="fecha"
        class="inp2"
        placeholder="Agregar fecha"
      />
     

      
    </div>
  
    <div class="button2">

      <button type="button" id="borrar-nota">
      <span><i class="fa-solid fa-trash-can"></i></span>Borrar Nota
      </button>

      <button type="submit" id="agregar-fecha">
      <span><i class="fa-regular fa-calendar-days"></i></span>Agregar Fecha
      </button>

    </div>

  </div>

   
</form>



`;

//Crear elemto con HTML
// const agregarNota = document.createElement('div');
// agregarNota.innerHTML = `

// <form id="main-form">
//   <input type="text" name="titulo" id="titulo" placeholder="Agregar titulo">
//   <input type="text" name="nota" id="nota" placeholder="Agregar tu nota">
//   <input type="text" name="fecha" id="fecha" placeholder="Agregar la fecha de tu nota">

//   <button type="button" id="borrar-nota">Borrar Nota</button>
//   <button type="submit" id="agregar-nota">Agregar Nota</button>
// </form>
// `;

// Funcion para agregar html dinamico en base a los resultados de la forma
function agregarNotaDinamico(titulo, nota, fecha) {

  const notaEnHtml = document.createElement('div');
  notaEnHtml.innerHTML = `
    <div class="div-notas">
      <h2 class="h2-nota">${titulo}</h2><hr>
      <p class="p1-nota">${nota}</p>
      <p class="p2-nota">>${fecha}</p>
    
    </div>`
    ;

    return notaEnHtml;
}

//Crear una constante para boton borrar
const btnDeBorrar = document.getElementById('borrar-nota');

//Agregar un evento listener al btn



//creacion de un eventlistener global  para la segunda parte del drilling confirma etec.
