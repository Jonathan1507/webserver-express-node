const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

// PAGINA DE INICIO O HOME
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Jonathan'
    });
});


// PAGINA DE NOSOTROS
app.get('/nosotros', (req, res) => {

    res.render('nosotros');
});

// AQUI CONFIGURAMOS PARA SUBIR A HEROKU
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`)
});