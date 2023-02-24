// get the client
const { query } = require('express');
const mysql = require('mysql');

// create the connection to database
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '@jay7861',
  database: 'intellisoft'
});

const getEmployeeList = async () => {
  connection.query('SELECT * FROM Employees', (error, results, fields) => {
    if (error) throw error;
    return results;
  });
};

const updateEmployeeDetails = async (EmployeeID, LastName, FirstName, Address, City) => {
  const querystring = `UPDATE Employees SET LastName = ${LastName}, FirstName = ${FirstName}, Address = ${Address}, City = ${City} WHERE EmployeeID = ${EmployeeID}`;
  connection.query(querystring, (error, results, fields) => {
    if (error) throw error;
    return 'success';
  });
};

const deleteEmployeeById = async (EmployeeID) => {
  const querystring = `DELETE FROM Employees WHERE EmployeeID = ${EmployeeID}`;
  const data = connection.query(querystring, (error, results, fields) => {
    if (error) throw error;
    return 'success';
  });
};

module.exports = {
  getEmployeeList,
  updateEmployeeDetails,
  deleteEmployeeById,
};
