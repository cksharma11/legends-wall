const mysql = require("mysql");
const util = require("util");

const config = {
  host: process.env.CLEAR_DB_HOST,
  user: process.env.CLEAR_DB_USER,
  password: process.env.CLEAR_DB_PASSWORD,
  database: process.env.CLEAR_DB_NAME
};

const pool = mysql.createPool(config);
pool.query = util.promisify(pool.query);

module.exports = { pool };
