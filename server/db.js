/* eslint-disable */
import mysql from 'mysql2';
import dotenv from 'dotenv';
/* eslint-enable */

dotenv.config();

const config = JSON.parse(process.env.MY_CONFIG);

const con = mysql.createPool({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database,
  port: config.port,
});
export const servidor = ({
  port: process.env.PORT || 3000,
  addresses: process.env.IP,
});
export default con;
