const mysql = require('mysql');

// 创建链接对象 
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'my-blog',
});

// 开始链接
conn.connect();

// 执行sql
const sql = 'select * from user';
conn.query(sql, (err, res) => {
  if(err) {
    console.error(err);
    return;
  }else {
    console.log(res);
  }
})