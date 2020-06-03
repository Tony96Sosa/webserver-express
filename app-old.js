const http = require('http'); //paquete que ya viene con Node

http.createServer((req, res) => { // funcion para crear el servidor
        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'Anthony Sosa',
            edad: 24,
            url: req.url,
        }
        res.write(JSON.stringify(salida));
        //res.write('Hola Mundo'); //respuesta a escribir
        res.end(); //comunicando que finalice la respuesta
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');