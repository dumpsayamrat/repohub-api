import mysql from 'mysql';

import config from './../../config';

const db = mysql.createPool({
  connectionLimit : 1,
  host: config.database.host,
  port: config.database.port,
  user: config.database.user,
  password: config.database.password,
  database: config.database.database,
  timezone: config.database.timezone
});

export default db;