const express = require('express');
const { errorUtils } = require('./common/utils');
const { employeesRoutes } = require('./employees');

const apiRoutes = express.Router({ mergeParams: true });

apiRoutes.use('/v1/employees', employeesRoutes);

apiRoutes.use('*', (req, res, next) => {
  try {
    return errorUtils.throwNotFound('Route');
  } catch (e) {
    return next(e);
  }
});

module.exports = apiRoutes;
