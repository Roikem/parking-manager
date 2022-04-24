module.exports = {
    devServer: {
        disableHostCheck: true,
    },
    devServer: {
        host: 'localhost',
        port: 8080,  //没被占用，可以使用的端口
        open: true,
        proxy: {
          '/api':{
            target: 'http://120.24.39.39:8080/', //接口域名
            changeOrigin: true,             //是否跨域
            pathRewrite: {                  //路径重置
              '^/api': ''
            }
          }
        }
      }
    
}