function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
  }

  let numeroMagico;
  const comenzarBtn = document.getElementById('comenzarBtn');
  const juegoDiv = document.getElementById('juego');
  const numeroInput = document.getElementById('numeroInput');
  const enviarBtn = document.getElementById('enviarBtn');

  comenzarBtn.addEventListener('click', function() {
    numeroMagico = generarNumeroAleatorio();
    juegoDiv.style.display = 'block';
  });

  enviarBtn.addEventListener('click', function() {
    const numeroUsuario = parseInt(numeroInput.value);
    if (numeroUsuario === numeroMagico) {
      alert('¡Felicidades! Has adivinado el número mágico.');
    } else if (numeroUsuario < numeroMagico) {
      alert('El número que ingresaste es menor al número mágico.');
    } else {
      alert('El número que ingresaste es mayor al número mágico.');
    }
  });