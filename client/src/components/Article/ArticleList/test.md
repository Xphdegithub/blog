[toc]

# 遇到的问题

## vue

1. `vue.config.js`中代理无效

   原因：target的地址前面必须加上`http://`或`https://`

2. `vue.config.js`中`proxy`的`pathRewrite`的作用不知道

   作用：重写代理地址

   ```js
   '/remote-dev': {
      target: 'http://192.168.1.109:8081',
      pathRewrite: { '^/remote-dev': '' },
      changeOrigin: true,
    },
    // 将/remote-dev重写为'',当请求的地址中没有/remote-dev时将其重写为'
   ```

   