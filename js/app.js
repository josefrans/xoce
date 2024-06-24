const btn = document.querySelector('button');

function sendData( data ) {
  const XHR = new XMLHttpRequest(),
        FD  = new FormData();

  // Push our data into our FormData object
  for( name in data ) {
    FD.append( name, data[ name ] );
  }

  // Define what happens on successful data submission
  XHR.addEventListener( 'load', function( event ) {
    alert( 'Yeah! Data sent and response loaded.' );
  } );

  // Define what happens in case of error
  XHR.addEventListener(' error', function( event ) {
    alert( 'Oops! Something went wrong.' );
  } );

  // Set up our request
  XHR.open( 'POST', 'https://example.com/cors.php' );

  // Send our FormData object; HTTP headers are set automatically
  XHR.send( FD );
}

btn.addEventListener( 'click', function()
  { sendData( {test:'ok'} );
} )



function mostrar(){
  document.getElementById('oculto').style.display = 'block';
}
function ocultar(){
  document.getElementById('oculto').style.display = 'none';
}



const nameInput = document.querySelector('input');
const form = document.querySelector('form');

nameInput.addEventListener('input', () => {
  nameInput.setCustomValidity('');
  nameInput.checkValidity();
});

nameInput.addEventListener('invalid', () => {
  if(nameInput.value === '') {
    nameInput.setCustomValidity('Enter your username!');
  } else {
    nameInput.setCustomValidity('Usernames can only contain upper and lowercase letters. Try again!');
  }
});

/* ésto comprueba la localStorage si ya tiene la variable guardada */
function compruebaAceptaCookies() {
  if(localStorage.aceptaCookies == 'true'){
    cajacookies.style.display = 'none';
  }
}

/* aquí guardamos la variable de que se ha
aceptado el uso de cookies así no mostraremos
el mensaje de nuevo */
function aceptarCookies() {
  localStorage.aceptaCookies = 'true';
  cajacookies.style.display = 'none';
}

/* ésto se ejecuta cuando la web está cargada */
$(document).ready(function () {
  compruebaAceptaCookies();
});


