const { MySqlManager } = require('../managers');
const config = require('../config');

const mySqlManager = MySqlManager(config.mysql);

// get the list of employees
const getEmployeeList = async ({ EmployeeID, LastName, FirstName, Address, City }) => {
  const conn = await mySqlManager.getConnection();
  const whereArray = [];
  const params = [];

  if (EmployeeID !== undefined) {
    whereArray.push('e.EmployeeID=?');
    params.push(EmployeeID);
  }

  if (LastName !== undefined) {
    whereArray.push('e.LastName=?');
    params.push(LastName);
  }

  if (FirstName !== undefined) {
    whereArray.push('e.FirstName=?');
    params.push(FirstName);
  }

  if (Address !== undefined) {
    whereArray.push('e.Address=?');
    params.push(Address);
  }

  if (City !== undefined) {
    whereArray.push('e.EmployeeID=?');
    params.push(City);
  }

  const whereString = whereArray.length > 0 ? `WHERE ${whereArray.join(' AND ')}` : '';
  const query = `SELECT EmployeeID, LastName, FirstName, Address, City FROM Employees e ${whereString}`;
  const rows = await conn.execute(query);
  return {
    success: true,
    employeelist: rows[0]
  };
};

// update an employee details
const updateEmployeeDetails = async ({ EmployeeID, LastName, FirstName, Address, City }) => {
  const conn = await mySqlManager.getConnection();
  const setArray = [];
  const params = [];

  if (!EmployeeID) {
    return {
      success: false,
      message: 'employee id not passed'
    };
  }

  if (LastName !== undefined) {
    setArray.push('LastName=?');
    params.push(LastName);
  }

  if (FirstName !== undefined) {
    setArray.push('FirstName=?');
    params.push(FirstName);
  }

  if (Address !== undefined) {
    setArray.push('Address=?');
    params.push(Address);
  }

  if (City !== undefined) {
    setArray.push('City=?');
    params.push(City);
  }

  const setString = setArray.length > 0 ? `SET ${setArray.join(' ,')}` : '';
  params.push(EmployeeID);
  const query = `UPDATE Employees ${setString} WHERE EmployeeID=?`;
  await conn.execute(query, params);
  return {
    success: true,
    EmployeeID,
    message: 'employee details updated'
  };
};

// delete an employee
const deleteEmployee = async ({ EmployeeID, LastName, FirstName, Address, City }) => {
  const conn = await mySqlManager.getConnection();
  const whereArray = [];
  const params = [];

  if (EmployeeID !== undefined) {
    whereArray.push('e.EmployeeID=?');
    params.push(EmployeeID);
  }

  if (LastName !== undefined) {
    whereArray.push('e.LastName=?');
    params.push(LastName);
  }

  if (FirstName !== undefined) {
    whereArray.push('e.FirstName=?');
    params.push(FirstName);
  }

  if (Address !== undefined) {
    whereArray.push('e.Address=?');
    params.push(Address);
  }

  if (City !== undefined) {
    whereArray.push('e.EmployeeID=?');
    params.push(City);
  }

  const whereString = whereArray.length > 0 ? `WHERE ${whereArray.join(' AND ')}` : '';
  const query = `DELETE FROM Employees e ${whereString}`;
  await conn.execute(query, params);
  return {
    success: true,
    EmployeeID,
    message: 'employee deleted'
  };
};

module.exports = {
  getEmployeeList,
  updateEmployeeDetails,
  deleteEmployee,
};
