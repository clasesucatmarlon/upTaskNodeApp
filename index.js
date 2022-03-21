const express = require('express');
const routes = require('./routes/routesUpTask');
const path = require('path');
const bodyParser = require('body-parser');

// IMPORTAR HELPERS
const helpers = require('./helpers');

// CREAR CONEXION A LA BD
const db = require('./config/db');

// IMPORTAR MODELO
require('./models/modelsProyectos');

// SINCRONIZAR BD CON EL MODELO
db.sync()
  .then( () => console.log('conectada la bd'))
  .catch( error => console.log(error))

// CREAR APLICACION
const app = express();

// CARGAR ARCHIVOS ESTATICOS
app.use(express.static('public'));

// HABILITAR PUG
app.set('view engine', 'pug');

// AÑADIR CARPETA DE VISTAS
app.set('views', path.join(__dirname, './views'));

// PASAR VARDUMP A LA APP
// res.locals = crear variables y usarlas en cualquier lugar de la app
app.use( (req, res, next) => {
  res.locals.year = new Date().getFullYear();
  res.locals.vardump = helpers.vardump;  // usar en el pug: pre= vardump(proyectos)
  next();
});

const moonLanding = new Date('July 20, 69 00:20:18');

console.log(moonLanding.getFullYear());
// expected output: 1969

// HABILITAR bodyParser para leer datos del 
app.use(bodyParser.urlencoded({extended: true}));

// MANEJAR RUTAS
app.use('/', routes());

app. listen(5000);