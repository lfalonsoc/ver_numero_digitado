function cerrar_pagina(ct) {
    var contartiempo = ct;
    document.getElementById('contador').innerHTML = contartiempo+' seg';
    if(contartiempo == 0) {
        window.close();
    } else {
        contartiempo -=1;
        setTimeout('cerrar_pagina('+contartiempo+')', 1000);
    }    
}

function enviarNumero() {
    var dato = document.getElementById('digitarNumero');
    try {
      if(dato.value.trim() == '') throw "El campo no puede estar vacio!";
      if(isNaN(dato.value)) throw 'El valor introducido no es un número!';
      dato.value = Number(dato.value);
      if (dato.value < 1) throw 'El valor introducido debe ser positivo!';
      limpiarInput(10);
    } catch(err) {
      alert(err);
      dato.focus();
      dato.value= '';
      return false;
    }
  }

function limpiarInput(ct) {
    var contartiempo = ct;
    var dato = document.getElementById('digitarNumero');
    if(contartiempo == 0) {
        dato.value = '';
        dato.focus();
    } else {
        contartiempo -=1;
        setTimeout('limpiarInput('+contartiempo+')', 1000);
    }
}