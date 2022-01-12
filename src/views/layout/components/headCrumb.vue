<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item>
      <a href="/">首页</a>
    </el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item,index) in crumbText" :key="index">{{item.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    crumbText() {
      const arr = this.$route.matched
      const crumbList = arr.filter((v, i) => {
        if (i !== 1) {
          return {
            name: v.meta.title
          }
        }
      })
      return crumbList
    }
  },
  mounted() {
    console.log(this.crumbText)
  }
}
</script>

<style>
</style>
