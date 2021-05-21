var proxy = null
console.log(process.env.VUE_APP_MODE === 'development', process.env.VUE_APP_SERVER_URL)
if (process.env.VUE_APP_MODE === 'development') {
    // 配置代理解决跨域问题
    proxy = {
        '/api': {
            target: process.env.VUE_APP_SERVER_URL,
            pathRewrite: {
                '^/api': ''
            },
            changeOrigin: true
        }
    }
}
module.exports = {
    devServer: {
        // proxy: proxy
        port: '5657'
    },
    chainWebpack: config => {
        config.output.filename('js/[name].js?v=[hash]').end()
        config.output.chunkFilename('js/[name].js?v=[hash]').end()
    },
    // publicPath: '/',
    productionSourceMap: false
}
