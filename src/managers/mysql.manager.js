const mysql = require('mysql2/promise');

module.exports = ({
  host,
  port,
  user,
  password,
  database,
  waitForConnections,
  connectionLimit,
  queueLimit,
  debug
}) => {
  const getConnection = async () => {
    return mysql.createPool({
      host,
      port,
      user,
      password,
      database,
      waitForConnections,
      connectionLimit,
      queueLimit,
      debug
    });
  };

  const getTransactionalConnection = async () => {
    const pool = await getConnection();
    return pool.getConnection();
  };

  return {
    getConnection,
    getTransactionalConnection
  };
};
