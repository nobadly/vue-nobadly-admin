<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item><a href="/">首页</a></el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item,index) in crumbText" :key="index">{{item}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    computed: {
        crumbText() {
            const arr = []
            const a = this.$route.meta
            if (!a.levelText) return []
            arr.push(a.levelText)
            a.secondLevel && arr.push(a.secondLevel)
            arr.push(a.title)
            return arr
        }
    },
    mounted() {
        console.log(this.crumbText)
    }
}
</script>

<style>
</style>
