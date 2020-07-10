//------------------- Variables ----------------------

const listTweets = document.getElementById('lista-tweets');

//-------------------- Events Listeners ------------------

eventListeners();

function eventListeners() {
     //cuando se envia el formulario
     document.querySelector('#formulario').addEventListener('submit', agregarTweet);

     //borrar Tweets
     listTweets.addEventListener('click', borrarTweet);

     // Contenido ya cargado
     document.addEventListener('DOMContentLoaded', localStorageExistente);
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

     // Añadir a local storage
     agregarTweetLocalStorage(tweet);

}

// Elimina el tweet del DOM
function borrarTweet(e) {
     e.preventDefault();

     if (e.target.className === 'borrar-tweet') {
          e.target.parentElement.remove();
     }
}

//mostrar datos de local storage en la lista
function localStorageExistente() {
     let tweets;

     tweets = obtenerTweetsLocalStorage();
     tweets.forEach(function (tweet) {

          const li = document.createElement('li');
          li.innerText = tweet;
          listTweets.appendChild(li);

          const botonBorrar = document.createElement('a');
          botonBorrar.classList = 'borrar-tweet';
          botonBorrar.innerText = 'X';
          li.appendChild(botonBorrar);
     });
}

// Agrega tweet a local storage
function agregarTweetLocalStorage(tweet) {
     let tweets;
     tweets = obtenerTweetsLocalStorage();
     // añadir el nuevo tweet
     tweets.push(tweet);
     // convertir de string a arreglo para guardar en localStorage
     localStorage.setItem('tweets', JSON.stringify(tweets));
}

// comprueba que haya elementos en localStorage, devuelve un arreglo
function obtenerTweetsLocalStorage() {
     let tweets;

     //reviso los valores de local storage
     if (localStorage.getItem('tweets') === null) {
          tweets = [];
     } else {
          tweets = JSON.parse(localStorage.getItem('tweets'));
     }
     return tweets;
}

