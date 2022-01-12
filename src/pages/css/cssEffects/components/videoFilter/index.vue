<template>
  <section>
    <header>
        <a href="#" class="logo">Logo</a>
        <div class="righSide">
            <div class="btns dayNight">
                <ion-icon name="moon-outline"></ion-icon>
                <ion-icon name="sunny-outline"></ion-icon>
            </div>
            <div class="btns menuToggle">
                <ion-icon name="menu-outline"></ion-icon>
                <ion-icon name="close-outline"></ion-icon>
            </div>
        </div>
    </header>
    <ul class="navigation">
        <li><a href="#">home</a></li>
        <li><a href="#">pack</a></li>
        <li><a href="#">about</a></li>
        <li><a href="#">car</a></li>
    </ul>
    <section class="main">
        <video src="./video.mp4" autoplay loop muted type="mp4"></video>
        <img src="./mark.jpg" alt="" class="mask">
        <h2>Ocean</h2>
    </section>

  </section>
</template>

<script>
export default {
  data () {
    return {
      msg: ''
    }
  },
  mounted() {
    const dayNight = document.querySelector('.dayNight')
    const menuToggle = document.querySelector('.menuToggle')
    const body = document.querySelector('body')
    const navigation = document.querySelector('.navigation')
    dayNight.onclick = function(e) {
        dayNight.classList.toggle('active')
        body.classList.toggle('dark')
    }
    menuToggle.onclick = function(e) {
        menuToggle.classList.toggle('active')
        navigation.classList.toggle('active')
    }
  },
  methods: {

  }
}
</script>

<style scoped>
@import url('./style.css');
section {
  position: relative;
  flex: 1;
}
</style>
