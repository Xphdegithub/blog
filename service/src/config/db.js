const env = process.env.NODE_ENV;

let MYSQL_CONFIG = {};

// 开发环境
if(env === 'dev') {
  MYSQL_CONFIG = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'my-blog',
  }
}

// 生产环境
if(env === 'production') {
  MYSQL_CONFIG = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'my-blog',
  }
}

module.exports = {
  MYSQL_CONFIG
}