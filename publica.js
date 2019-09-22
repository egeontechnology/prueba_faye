let faye = require('faye');
let client = new faye.Client('http://localhost:8000/');

//  i es el contador con el que generamos un dato. max es el número de datos a generar
let i = 1;
let max = 11;

/*
    Con setInterval publicamos el dato (contador) en el servidor que se ha puesto en marcha en serverstart.js.
    El dato se publica cada 1000 miliseg (1 seg.) en el topic "/messages"
    La salida por consola está a efectos de depuración.
 */
const tim = setInterval(
    () => {
        client.publish('/messages', {text: 'Hola ' + i});
        console.log('Hola ' + i);
        if (i++ === max) {
            clearInterval(tim);
            process.exit(0);
        }
    }, 1000);