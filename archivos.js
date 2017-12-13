const fs = require('fs');

// SOBRE ESCRIBIR ARCHIVO
const archivo = fs.createWriteStream('escritura.txt');
archivo.write("Hola mundo!!");
archivo.end("----");

// AGREGAR INFO AL ARCHIVO
const archivo2 = fs.createWriteStream('escritura.txt', {
    flags: 'r+',
    start: 4
});
archivo2.write(" texto agregado ");
archivo2.end();
