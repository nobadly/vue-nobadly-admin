<template>
    <section class="app-main">
        <NavBar></NavBar>
        <div class="main-container">
            <SideBar></SideBar>
            <AppMain></AppMain>
        </div>
    </section>
</template>

<script>
/**
 * 后台页面
 */
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import AppMain from './components/AppMain'
export default {
    components: { SideBar, NavBar, AppMain }
}
</script>

<style scoped>
.app-main {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}
.sideBar {
    min-width: 220px;
    height: 100%;
    border-right: 1px solid #ccc;
    /* overflow: hidden; */
}
.main-container {
    flex: 1;
    display: flex;
    overflow: hidden;
}
</style>
