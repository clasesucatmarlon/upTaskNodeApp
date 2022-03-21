const Proyectos = require('../models/modelsProyectos');

exports.proyectosHome = async (req, res) => {
  const proyectos = await Proyectos.findAll();
  res.render('index', {
    nombrePagina: 'Proyectos',
    proyectos
  })
};

exports.formularioProyecto = async (req, res) => {
  const proyectos = await Proyectos.findAll();
  res.render('nuevoProyecto', {
    nombrePagina: 'Nuevo proyecto',
    proyectos
  })
};

exports.nuevoProyecto = async (req, res) => {
  const proyectos = await Proyectos.findAll();
  // VALIDAR EL INPUT
  const { nombre } = req.body;
  let errores = [];
  if (!nombre) {
    errores.push({'texto': 'Debe agregar un Nombre para el proyecto...'});
  };
  if (errores.length > 0) {
    res.render('nuevoProyecto', {
      nombrePagina: 'Nuevo proyecto',
      errores,
      proyectos
    });
  } else {
    // Insertar en BD
    const proyecto = await Proyectos.create({nombre});
    res.redirect('/');
  };
};

exports.proyectoPorURL = async (req, res, next) => {
  const proyectos = await Proyectos.findAll();
  
  const proyectoOne = await Proyectos.findOne({
    where: {
      url: req.params.url
    }
  });
  if (!proyectoOne) {
    return next();
  }
  // REnder a la vista
  res.render('tareas', {
    nombrePagina: 'Tareas del proyecto',
    proyectos,
    proyectoOne
  });
};

exports.formularioEditar = async (req, res) => {
  const proyectos = await Proyectos.findAll();
  res.render('nuevoProyecto', {
    nombrePagina: 'Editar proyecto',
    proyectos
  });
};

// exports --->>> se pueden tener varios y exportarlos