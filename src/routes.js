const express = require('express');
const routes = express.Router();
const ServiceController = require('./controllers/ServiceController');

routes.get("/services", ServiceController.index);
routes.post('/service', ServiceController.store);
routes.get('/service/:id', ServiceController.detail);
routes.put('/service/:id', ServiceController.update);
routes.delete('/service/:id', ServiceController.delete);


module.exports = routes;