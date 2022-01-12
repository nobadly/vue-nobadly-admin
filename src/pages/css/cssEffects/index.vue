<template>
  <section class="effecs">
    <ul ref="ul" class="ul">
      <li class="active" attr="1">
        <a href>
          <ion-icon name="home-outline"></ion-icon>
          <div>视频</div>
        </a>
      </li>
      <li>
        <a href>
          <ion-icon name="person-outline"></ion-icon>
        </a>
      </li>
      <li>
        <a href>
          <ion-icon name="add-circle-outline"></ion-icon>
        </a>
      </li>
      <li>
        <a href>
          <ion-icon name="settings-outline"></ion-icon>
        </a>
      </li>
      <li>
        <a href>
          <ion-icon name="chatbubble-outline"></ion-icon>
        </a>
      </li>
      <div id="marker"></div>
    </ul>
    <videoFilter v-if="activeIndex==1"/>
  </section>
</template>

<script>
import videoFilter from './components/videoFilter'
export default {
  data() {
    return {
      msg: '2',
      activeIndex: 1
    }
  },
  components: { videoFilter },
  mounted() {
    const liList = document.querySelectorAll('.effecs .ul li')
    const marker = document.querySelector('#marker')
    const that = this
    function markLink(e) {
      marker.style.left = e.offsetLeft + 'px'
      marker.style.width = e.offsetWidth + 'px'
      that.activeIndex = e.getAttribute('attr')
    }
    // console.log(liList);
    liList.forEach((link) => {
      link.addEventListener('mousemove', (e) => {
        markLink(e.target)
      })
      link.addEventListener('mouseover', function () {
        liList.forEach((item) => {
          item.classList.remove('active')
          this.classList.add('active')
        })
      })
    })
  },
  methods: {
  }
}
</script>

<style scoped>
.effecs {
  display: flex;
  flex-direction: column;
}
ul {
  position: relative;
  display: flex;
  border-radius: 10px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);
  background-color: #202355;
  overflow: hidden;
}
li ion-icon {
  font-size: 1.5em;
  opacity: 0.25;
  transition: 0.25s;
  cursor: pointer;
}
li.active ion-icon {
  opacity: 1;
}
a {
  position: relative;
  display: inline-block;
  color: #fff;
  padding: 10px 20px;
  z-index: 1000;
  backdrop-filter: blur(15px);
  pointer-events: none;
}
#marker {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: 0.5s;
  z-index: 1;
}
#marker::before {
  content: "";
  position: absolute;
  top: -15px;
  left: 32px;
  transform: translateX(-50%);
  width: 40px;
  height: 30px;
  border-radius: 8px;
  background-color: #6aa3fb;
  box-shadow: 0 0 10px #5da6ff, 0 0 20px #5da6ff, 0 0 35px #5da6ff,
    0 0 60px #5da6ff;
}
li:nth-child(1).active #marker::before {
  box-shadow: 0 0 5px #5da6ff, 0 0 10px #5da6ff, 0 0 25px #5da6ff,
    0 0 60px #5da6ff;
}
li:nth-child(2).active ~ #marker::before {
  background: #cc0eef;
  box-shadow: 0 0 5px #cc0eef, 0 0 10px #cc0eef, 0 0 25px #cc0eef,
    0 0 60px #cc0eef;
}
li:nth-child(3).active ~ #marker::before {
  background: red;
  box-shadow: 0 0 5px red, 0 0 10px red, 0 0 25px redf, 0 0 60px red;
}
li:nth-child(4).active ~ #marker::before {
  background: #0094ff;
  box-shadow: 0 0 5px #0094ff, 0 0 10px #0094ff, 0 0 25px #0094ff,
    0 0 60px #0094ff;
}
li:nth-child(5).active ~ #marker::before {
  background: #f7f795;
  box-shadow: 0 0 5px #f7f795, 0 0 10px #f7f795, 0 0 25px #f7f795,
    0 0 60px #f7f795;
}
</style>
