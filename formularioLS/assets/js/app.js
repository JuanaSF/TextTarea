//------------------- Variables ----------------------

const listTweets = document.getElementById('lista-tweets');

//-------------------- Events Listeners ------------------

eventListeners();

function eventListeners() {
     //cuando se envia el formulario
     document.querySelector('#formulario').addEventListener('submit', agregarTweet);

     //borrar Tweets
     listTweets.addEventListener('click', borrarTweet);
}


//----------------------- Funciones -------------------------

// Añadir tweet del formulario
function agregarTweet(e) {
     e.preventDefault();

     const tweet = document.getElementById('tweet').value;

     //creo un nuevo elemento que sera una lista
     const li = document.createElement('li');
     //le seteo el texto que ya se escribio en el textTarea
     li.innerText = tweet;
     //Se lo paso al elemento padre para poder visualizarlo
     listTweets.appendChild(li);

     //Creo un boton para borrar
     const botonBorrar = document.createElement('a');
     botonBorrar.classList = 'borrar-tweet';
     botonBorrar.innerText = 'X';
     // li será el elemento padre de este boton
     li.appendChild(botonBorrar);

     //una vez agregado a la lista limpio el textTarea
     document.getElementById('tweet').value = '';

}

function borrarTweet(e) {
     e.preventDefault();

     if (e.target.className === 'borrar-tweet') {
          e.target.parentElement.remove();
     }
}