const express = require('express');
import { router } from './route'
const server = http.createServer(router)

// Create an instance of the Express application
const app = express();

// Use the routes defined in routes.js
app.use('/', routes);

// Start the HTTP server and listen on port 1337
const port = 1337;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});