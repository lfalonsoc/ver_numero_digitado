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
        abrirNuevaVentana(dato.value)
        limpiarInput(dato, 10);
    } catch(err) {
        alert(err);
        dato.focus();
        dato.value= '';
        return false;
    }
  }

function limpiarInput(dato, ct) {
    var contartiempo = ct;
    if(contartiempo == 0) {
        dato.value = '';
        dato.focus();
    } else {
        contartiempo -=1;
        setTimeout('limpiarInput('+contartiempo+')', 1000);
    }
}

var myWindow;
function abrirNuevaVentana(numero) {
    var textHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <META HTTP-EQUIV="Access-Control-Allow-Origin">
            <title>Visualizador de números</title>
            
            <!-- CSS Bootstrap -->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
            crossorigin="anonymous">
            <!-- JS Bootstrap -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

            <style>
                #mostrarNumero {
                    width: 300px;
                    font-size: 150px;
                    padding: 12px;
                }
            </style>
        </head>
        <body>
            <div class="container mt-3">
                <div class="mb-3 text-center">
                    <label for="mostrarNumero" class="form-label h3">Digite el Número que desea visualizar</label>
                    <input type="text" class="form-control d-block mx-auto text-center" id="mostrarNumero" value="`+numero+`" readonly>
                    <h3 class="mt-3" id="contadorEsta"></h3>
                </div>
            </div>
        </body>
        </html>
    `;
    myWindow = window.open("", "MsgWindow", "width=1200,height=600");
    myWindow.document.write(textHTML);
    cerrar_esta(10);
}


function cerrar_esta(ct, ventana) {
    var contarTiempoEsta = ct;
    if(contarTiempoEsta == 0) {
        myWindow.close();
    } else {
        contarTiempoEsta -=1;
        setTimeout('cerrar_esta('+contarTiempoEsta+')', 1000);
    }
}