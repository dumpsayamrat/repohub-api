'use strict';

// require('dotenv').config()
import dotenv from 'dotenv';
dotenv.config();

let config = {};

config.database = {
  connectionLimit : process.env.DB_CONNECTION_LIMIT,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  timezone: '-00:00'
};

// Export final configuration object
module.exports = config;
