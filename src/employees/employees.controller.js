const { successHandler } = require('../common/handlers');
const employeesService = require('./employees.service');

const getEmployeesList = async (req, res, next) => {
  try {
    const data = await employeesService.getEmployeeList({
      ...req.query,
      ...req.params,
      ...req.body
    });
    return successHandler({ data }, req, res, next);
  } catch (e) {
    return next(e);
  }
};

const updateEmployee = async (req, res, next) => {
  try {
    const data = await employeesService.updateEmployeeDetails({
      ...req.query,
      ...req.params,
      ...req.body
    });
    return successHandler({ data }, req, res, next);
  } catch (e) {
    return next(e);
  }
};

const deleteEmployee = async (req, res, next) => {
  try {
    const data = await employeesService.deleteEmployee({
      ...req.query,
      ...req.params,
      ...req.body
    });
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
