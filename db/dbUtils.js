const { pool } = require("./config");

const DEFAULT_CONDITION = "1=1";

const insertQuery = async (table, data) => {
  const query = `Insert into ${table} values('${data}')`;
  const result = await pool.query(query);
  return result;
};

const selectQuery = async (table, condition = DEFAULT_CONDITION) => {
  const query = `Select * from ${table} where ${condition}`;
  const result = await pool.query(query);
  return result;
};

const executeQuery = async query => {
  const result = await pool.query(query);
  return result;
};

module.exports = { insertQuery, selectQuery, executeQuery };
