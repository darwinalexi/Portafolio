const toggleSwitch = document.getElementById('toggle-switch');

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    // Acción cuando el toggle está activado
    console.log('Toggle activado');
  } else {
    // Acción cuando el toggle está desactivado
    console.log('Toggle desactivado');
  }
});
