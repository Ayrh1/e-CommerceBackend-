/*
[const router = require('express').Router();]
This line imports the Router function from the Express framework 
and creates a new router object. Router is a middleware in Express 
that lets you group route handlers and middleware into a single instance.
*/
const router = require('express').Router();
const apiRoutes = require('./api'); // imports file containing all routes 

/*
[router.use('/api', apiRoutes); ]
This line attaches the apiRoutes to the base path /api. 
It means that any request whose path starts with /api will be passed on to the 
apiRoutes for further routing. For example, if apiRoutes defines a route for /users, 
it will be accessible via the path /api/users in the application.
*/
router.use('/api', apiRoutes); 


router.use((req, res) => { // if route dies not start wit /api, sends an error 
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;