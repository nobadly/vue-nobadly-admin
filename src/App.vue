<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    mounted() {
        const dom = document.createElement('script')
        // dom.setAttribute('src', '/js/app2.js?v=b195d7b09d9a11062eef')
        document.body.appendChild(dom)
    }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
