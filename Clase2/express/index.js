console.log("express-START");

const express = require('express');
const { Middleware, encryptMD } = require('./services/middlewares.js');
const usuarioRouter = require('./routes/usuarioRouter.js');
const path = require('path');
const userHome = require('./routes/userHome.js')
const hbs = require('hbs');
const app = express();

//Uso de los mdws
app.use(Middleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

//Set motor de plantilla - SSR
app.set('view engine', 'hbs');

//Set la carpeta donde busca los archivos de plantilla
app.set('views', path.join(__dirname, '/views'));

//Especificar la carpeta donde van a estar los partia views
hbs.registerPartials(path.join(__dirname, 'views/partials'));

//Rutas
app.use('/', userHome);
app.use('/api/users', usuarioRouter);


module.exports = app;