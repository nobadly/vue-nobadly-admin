<template>
  <section class="interviewSsh">
    <ul>
      <h3>2021/8/16  小W</h3>
      <li>现在经常问的是vue2到3做了哪些改变</li>
      <li>http有问1.0,1.1，2。0做了什么改变</li>
      <li>npm包管理的依赖包版本冲突问题如何解决呢？</li>
    </ul>
    <details v-for="item in list" :key="item.href">
      <summary>{{item.title}}</summary>
      <a :href="item.href" target="_blank">{{item.href}}</a>
    </details>
  </section>
</template>

<script>
export default {
  name: 'interviewSsh',
  data() {
    return {
      list: []
    }
  },
  created() {
    this.list = [
      {
        title: 'vue.js和vue.runtime.js的区别',
        href: 'https://www.cnblogs.com/fourther/p/13343074.html'
      },
      {
        title: '复盘最近一个月的中大厂面试经历(附加答案)',
        href: 'https://juejin.cn/post/6995744994166308895'
      },
      {
        title: '死磕 36 个 JS 手写题（搞懂后，提升真的大）',
        href: 'https://juejin.cn/post/6946022649768181774'
      },
      {
        title: '排序最快的是快排 JavaScript 快速排序算法',
        href: 'https://www.cnblogs.com/hjx-blog/articles/9183453.html'
      }
    ]
  }
}
</script>

<style scoped lang="scss">
.interviewSsh {
  ul {
    padding-left: 20px;
  }
  details {
    margin: 10px 0;
  }
}
</style>
