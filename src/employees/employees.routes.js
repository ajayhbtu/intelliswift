const express = require('express');
const employeesController = require('./employees.controller');

const routes = express.Router({ mergeParams: true });

routes.get('/', employeesController.getEmployeesList);
routes.post('/:EmployeeID', employeesController.updateEmployee);
routes.delete('/:EmployeeID', employeesController.deleteEmployee);

module.exports = routes;
