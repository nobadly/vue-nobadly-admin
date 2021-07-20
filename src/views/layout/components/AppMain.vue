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
export default {
  name: 'AppMain',
  components: { headCrumb },
  data() {
    return {
      isClose: false,
      isdot: false
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
