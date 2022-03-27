const express = require('express');
const router = express.Router();
const controllerUpTask = require('../controllers/controllerUpTask');
const { body } = require('express-validator');

module.exports = function() {
  router.get('/', controllerUpTask.proyectosHome);
  router.get('/nuevo-proyecto', controllerUpTask.formularioProyecto);
  router.post('/nuevo-proyecto', 
    body('nombre').not().isEmpty().trim().escape(),
    controllerUpTask.nuevoProyecto
  );

  // Listar proyecto
  router.get('/proyectos/:url', controllerUpTask.proyectoPorURL);

  // Actualizar proyecto
  router.get('/proyecto/editar/:id', controllerUpTask.formularioEditar);

  // Editar proyecto
  router.post('/nuevo-proyecto/:id', 
    body('nombre').not().isEmpty().trim().escape(),
    controllerUpTask.actualizarProyecto
  );
  
  return router;
}

// module.exports --->>> solo se puede tener y exportar uno