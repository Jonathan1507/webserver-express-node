const http = require('http');

http.createServer((request, resolve) => {
    resolve.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Jonathan',
        edad: 23,
        url: request.url
    }
    resolve.write(JSON.stringify(salida));
    //resolve.write('Hola Mundo');
    resolve.end();
})
    .listen(8080);
console.log('Escuchando el puesto 8080');