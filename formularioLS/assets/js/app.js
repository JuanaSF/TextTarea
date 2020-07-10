//------------------- Variables ----------------------

const listTweets = document.getElementById('lista-tweets');

//-------------------- Events Listeners ------------------

eventListeners();

function eventListeners(){
    //cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);
}

//----------------------- Funciones -------------------------

// Añadir tweet del formulario
function agregarTweet(e){
    e.preventDefault();

    const tweet = document.getElementById('tweet').value;

    console.log(tweet);
}
