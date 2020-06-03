const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers'); //solicito los helpers que estan en other folder
//forma que utilizo para que se puedan hacer visibles all files into de public folder

const port = process.env.PORT || 3000; //asigno el puerto que me proporciona el servidor o el puerto que utilizo en localhost

app.use(express.static(__dirname + '/public')); //generando un middleware, funcion o callback que se ejecuta siempre no importa la url que se escriba

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales'); //el __dirname sirve para cuando no se trabaja en localhost, al tener otra ruta o path solo quiero que le concatene la ruta de mis carpetas
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        name: 'kurt anthony sosa', //funcion que me proporciona el año actual y se actualiza de forma automatica
    }); // renderisamos el archivo completo home.hbs
    // res.send('Hola Mundo');
    // let salida = {
    //     nombre: 'Anthony Sosa',
    //     edad: 24,
    //     url: req.url,
    // }
    // res.send(salida);
})
app.get('/about', (req, res) => {
        res.render('about');
    })
    // app.get('/data', (req, res) => {
    //     res.send('Hola Data');
    // })

app.listen(port, () => {
    console.log(`Escuchando por el puerto ${port}`);
})