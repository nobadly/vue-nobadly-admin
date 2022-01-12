<template>
  <section>
    <div class="tabs">
      <!-- Active tab -->
      <div
        :class="className(item.url)"
        v-for="item in webList"
        :key="item.url"
        @click="onClick(item)"
      >{{item.name}}</div>
    </div>
    <iframe :src="url" frameborder="0"></iframe>
  </section>
</template>

<script>
export default {
  data() {
    return {
      webList: [],
      url: 'https://9elements.github.io/fancy-border-radius/#35.66.60.38--.'
    }
  },
  created() {
    this.webList = [
      {
        name: '设置border-radius',
        url: 'https://9elements.github.io/fancy-border-radius/#35.66.60.38--.'
      },
      { name: 'css布局', url: 'https://csslayout.io/' },
      { name: '图标', url: 'https://fontawesome.com/start' },
      { name: 'js图标', url: 'https://ionic.io/ionicons' },
      { name: 'css动画', url: 'https://animista.net/play/basic/slide' },
      { name: 'css灵感', url: 'https://chokcoco.github.io/CSS-Inspiration/#/' },
      { name: '在线css调试', url: 'https://htmlcheatsheet.com/css/' }
    ]
  },
  methods: {
    onClick(v) {
      this.url = v.url
    },
    className(url) {
      if (url === this.url) {
        return 'active'
      } else {
        return 'inactive'
      }
    }
  }
}
</script>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  .tabs {
    /* Center the content */
    align-items: center;
    display: flex;
    margin-bottom: 10px;
    box-shadow: 0 -10px 10px rgba(0,0,0,.25);
    div {
      padding:10px 20px;
      cursor: pointer;
      transition: 0.25s;
      &:hover {
         color: #67b6ee;
      }
    }
  }

  .active {
    /* Border */
    border: 1px solid rgba(0, 0, 0, 0.3);
    color: #67b6ee;
    /* Hide the bottom border */
    border-bottom-color: transparent;

    /* Border radius */
    border-top-left-radius: 2px;
    border-top-right-radius: 2px;
  }

  .inactive {
    /* Has only the bottom border */
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }

  li.active {
    color: #0094ff;
  }
  iframe {
    flex: 1;
  }
}
</style>
