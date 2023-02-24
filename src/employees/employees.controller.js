const { successHandler } = require('../common/handlers');
const EmployeesService = require('./employees.service');

const getEmployeesList = async (req, res, next) => {
  try {
    const data = EmployeesService.getEmployeeList();
    return successHandler({ data }, req, res, next);
  } catch (e) {
    return next(e);
  }
};

const updateEmployee = async (req, res, next) => {
  try {
    const data = EmployeesService.updateEmployeeDetails(
      ...req.query,
      ...req.params,
      ...req.body
    );
    return successHandler({ data }, req, res, next);
  } catch (e) {
    return next(e);
  }
};

const deleteEmployee = async (req, res, next) => {
  try {
    const data = EmployeesService.deleteEmployeeById(
      ...req.query,
      ...req.params,
      ...req.body
    );
    return successHandler({ data }, req, res, next);
  } catch (e) {
    return next(e);
  }
};

module.exports = {
  getEmployeesList,
  updateEmployee,
  deleteEmployee,
};
