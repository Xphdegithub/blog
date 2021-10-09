const mysql = require('mysql');
import { MYSQL_CONFIG } from '../config/db';

// 创建链接对象
const con = mysql.createConnection(MYSQL_CONFIG);

function exec(sql) {
  const promise = new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if(err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  })
  return promise;
}

module.exports = {
  exec,
}