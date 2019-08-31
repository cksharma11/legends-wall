const { pool } = require("./config");

const DEFAULT_CONDITION = "1=1";

const insertQuote = async (table, data) => {
  const query = `Insert into ${table}(quote) values('${data}')`;
  const result = await pool.query(query);
  return result;
};

const insertSubQuote = async (table, data, quoteId) => {
  const query = `Insert into ${table} values("${data}", ${quoteId})`;
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

const updateLikes = async (table, id, likes) => {
  const query = `update ${table} set likes=${likes + 1} where id=${id}`;
  const result = await pool.query(query);
  return result;
};

module.exports = {
  insertQuote,
  selectQuery,
  executeQuery,
  updateLikes,
  insertSubQuote
};
