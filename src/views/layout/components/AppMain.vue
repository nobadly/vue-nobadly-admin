<template>
  <section class="app-main">
    <headCrumb class="ptl20"></headCrumb>
    <el-divider></el-divider>
    <transition name="fade-transform" mode="out-in">
      <!-- :include="cachedViews" -->
      <keep-alive>
        <router-view :key="key" class="app-main-content"></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
/**
 * 子路由页面
 */
import headCrumb from './headCrumb'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
export default {
  name: 'AppMain',
  components: { headCrumb },
  data() {
    return {
      isClose: false,
      isdot: false,
      socketUrl: process.env.VUE_APP_SERVER_URL + '/endpointChat',
      stompClient: null,
      chatList: []
    }
  },
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    },
    key() {
      return this.$route.fullPath
    }
  },
  mounted() {
      try {
        //   this.initWebSocket()
      } catch (error) {

      }
  },
  methods: {
    dblclick() {
      console.log('触发了')
      this.isClose = !this.isClose
      if (this.isClose) this.isdot = false
    },
    // ***************** webSocket *****************
    initWebSocket() {
      const socket = new SockJS(this.socketUrl)
      this.stompClient = Stomp.over(socket)
      this.stompClient.connect(
        'guest',
        'guest',
        () => {
          this.successCallback() // 连接成功
        },
        () => {
          this.disconnect() // 断开连接
        }
      )
    },
    // 连接成功
    successCallback() {
      console.log('连接成功')
      this.stompClient.subscribe('/queue/notifications', (val) => {
        console.log(val.body)
        // 设置未读消息
        if (!this.isClose) this.isdot = true
        const obj = JSON.parse(val.body)
        const res = {
          type: 'adverse'
        }
        console.log(typeof (obj.contentText), obj.contentText)
        if (typeof (obj.contentText) === 'object') {
          res.media = 'text'
          res.content = obj.contentText.response.reply.displayText
        } else if (typeof (obj.contentText) === 'string') {
          res.media = 'text'
          res.content = obj.contentText
        }
        console.log(res)
        this.chatList.push({ ...res })
      })
    },
    disconnect() {
      console.log('关闭连接')
      this.reconnect(this.socketUrl)
      if (this.stompClient != null) {
        this.stompClient.disconnect()
      }
    },
    reconnect(socketUrl) {
      console.log('in reconnect function')
      const socket = new SockJS(socketUrl)
      this.stompClient = Stomp.over(socket)
      this.stompClient.connect(
        {},
        () => {
          console.info('reconnected success')
          // 连接成功
          console.log('成功')
          this.successCallback()
        },
        () => {
          // 失败
          console.log('失败')
          setTimeout(() => {
            this.reconnect(this.socketUrl)
          }, 5000)
        }
      )
    },
    send(v) {
      console.log(v)
      this.chatList.push({
        type: 'oneself',
        media: 'text',
        content: this.$refs.chatbox.chatValue
      })
      this.sendMesage('text')
    },
    sendImg() {
      this.chatList.push({
        type: 'oneself',
        media: 'image',
        content:
          'https://maaptest.189.cn/maap_message/bot/chanageUrl/perm/20210515094104/588938/35,89b221c18953.png'
      })
      this.sendMesage('image')
    },
    sendVideo() {
      this.chatList.push({
        type: 'oneself',
        media: 'video',
        content:
          'https://maaptest.189.cn/maap_message/bot/chanageUrl/perm/20210515115437/3168387/16,89f4da02f484.mp4'
      })
      this.sendMesage('video')
    },
    // 发送消息
    sendMesage(type) {
      const obj = {
        phone: '13316487883',
        chatbotId: 'd465456a46-6565465-123-65-123 ', // 单卡片
        msg: this.$refs.chatbox.chatValue,
        type: 1,
        url: '',
        fileSize: ''
      }
      if (type === 'text') {
        obj.type = 1
      } else if (type === 'image') {
        obj.type = 2
        obj.fileSize = 13608
        obj.url =
          'https://maaptest.189.cn/maap_message/bot/chanageUrl/perm/20210515094552/10193/2,89b3cdc437a6.png'
      } else if (type === 'video') {
        obj.type = 3
        obj.fileSize = 3168387
        obj.url =
          'https://maaptest.189.cn/maap_message/bot/chanageUrl/perm/20210515115437/3168387/16,89f4da02f484.mp4'
      }
      this.stompClient.send('/chat/msg', {}, JSON.stringify(obj))
      this.$refs.chatbox.chatValue = ''
      this.$refs.chatbox.bottomScroll()
    }
  }
}
</script>

<style scoped>
.app-main-content {
  height: 100%;
  overflow: auto;
  padding: 0 20px 20px 20px;
}
.chat {
  width: 50px;
  height: 50px;
  background-color: red;
}
</style>
