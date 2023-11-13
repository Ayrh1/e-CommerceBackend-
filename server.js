const express = require('express');
const routes = require('./routes'); // imports route file 
const sequelize = require('./config/connection');// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001; // sets port

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});