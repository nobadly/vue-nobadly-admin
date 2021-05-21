let host = ''
if (process.env.VUE_APP_MODE === 'development') {
    host = process.env.VUE_APP_SERVER_URL
    // host = '/api'
} else {
    host = 'http://baidu.com'
}
console.log(host, '88888')
export default {
    // 登录接口地址
    LOGIN: host + '/sys/login',
    // 5G消息
    SEND_MSG: host + '/msg/sendMsg'
}
