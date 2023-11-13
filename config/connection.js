require('dotenv').config(); // conects to .env file where sensitive information is stored

const Sequelize = require('sequelize');
//#[JAWSDB_URL] is an environment variable that is expected to hold the connection string for a JawsDB database. JawsDB is a cloud-hosted MySQL service, often used in deployment environments like Heroku.
const sequelize = process.env.JAWSDB_URL //an object representing the environment in which the Node.js process is running. It contains environment variables.
  ? new Sequelize(process.env.JAWSDB_URL) // [?] 'if' statement checking if connection  excists, if it does this part of the code gets execute 
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, { //[:] 'else' - if the JAWSDB_URL connection doesnt exist, executes this other code.  
      host: 'localhost',
      dialect: 'mysql',
      /*
      #[dialectOptions: { decimalNumbers: true, },] - This is another configuration option for Sequelize. 
      #[decimalNumbers: true] ensures that decimal values are treated as JavaScript numbers rather than strings when data is fetched from the database.
      */
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
