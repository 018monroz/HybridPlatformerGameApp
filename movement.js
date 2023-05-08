var intervalId; // Almacenar el ID del intervalo para detenerlo más tarde

function moverDerecha() {
  var contenedor = document.getElementById("contenedor");
  var div = document.getElementById("item");
  intervalId = setInterval(function() {
    var left = parseInt(div.style.left) || 0;
    left += 8; // Mueve el div 5 píxeles a la derecha cada 50ms
    if (left + div.offsetWidth > contenedor.offsetWidth) {
      // Si el div está a punto de salir del contenedor por la derecha, detener el movimiento
      left = contenedor.offsetWidth - div.offsetWidth;
    }
    div.style.left = left + "px";
  }, 50);
}

function moverIzquierda() {
  var div = document.getElementById("item");
  intervalId = setInterval(function() {
    var left = parseInt(div.style.left) || 0;
    left -= 8; // Mueve el div 5 píxeles a la izquierda cada 50ms
    if (left < 0) {
      // Si el div está a punto de salir del contenedor por la izquierda, detener el movimiento
      left = 0;
    }
    div.style.left = left + "px";
  }, 50);
}

function detenerMovimiento() {
  clearInterval(intervalId);
}