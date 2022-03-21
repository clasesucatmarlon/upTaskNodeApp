const Sequelize = require('sequelize');

// const db = new Sequelize('uptasknode', 'marlon', 'marlon12345', {
//   host: 'localhost',
//   port: 3306,
//   dialect: 'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
//   operatorsAliases: 0,
//   define: {
//     timestamps: 0
//   },
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// });

const db = new Sequelize('u843396151_uptasknode', 'u843396151_uptasknode', 'Marlon12345*', {
  host: '217.21.77.51',
  port: 3306,
  dialect: 'mysql', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  operatorsAliases: 0,
  define: {
    timestamps: 0
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = db;


// 0 = false
// 1 = true
// db = u843396151_uptasknode 
// user = u843396151_uptasknode 
// pass = Marlon12345*
// sql571.main-hosting.eu or you can use this IP as your hostname: 217.21.77.51

