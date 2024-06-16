'use strict'
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('enviarBtn').addEventListener('click', function() {
      var formulario = document.getElementById('formulario');
      if (formulario.checkValidity()) {
          alert('El formulario no tiene funcionalidad');
      } else {
          formulario.reportValidity();
      }
  });
});
