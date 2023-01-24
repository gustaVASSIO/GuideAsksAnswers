const knex = require('knex')({
    client: 'mysql2',
    connection: {
      host : 'localhost',
      user : 'root',
      password : 'muzambinho13',
      database : 'askdev',
      port:'3307'
    }
});
module.exports = knex