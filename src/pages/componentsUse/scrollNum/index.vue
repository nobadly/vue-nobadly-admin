<template>
  <section>
    <div class="mb20">
      <el-button size="small" @click="scroll">点击滚动</el-button>
    </div>
    <div class="scrollNum mb20">
      <ul class="flex">
        <ScrollNum
          v-for="(number, idx) of numArr"
          :key="idx"
          :i="number"
          :delay="idx + 2.5"
          as="li"
          class="num"
        />
      </ul>
      <ul class="flex">
        <ScrollNum v-for="(num, idx) of numArr" :key="idx" as="li" :i="num" :delay="idx + 1" />
      </ul>
    </div>
    <details>
      <summary>作者掘金地址</summary>
      <el-link
        href="https://juejin.cn/post/6986453616517185567#heading-1"
        target="_blank"
      >https://juejin.cn/post/6986453616517185567#heading-1</el-link>
    </details>
  </section>
</template>

<script>
import ScrollNum from './components/ScrollNum.vue'

export default {
  name: 'numberScroll',
  components: { ScrollNum },
  data: () => ({ num: 886 }),
  computed: {
    numArr() {
      const str = String(this.num)

      return [parseInt(str[0]), parseInt(str[1]), parseInt(str[2])]
    }
  },
  methods: {
    scroll() {
      this.num = Math.floor(Math.random() * 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.scrollNum {
  display: flex;
}
.flex {
  display: flex;
}
.num {
  --width: 26px;
  margin-right: 6px;
  border: 1px solid black;
  border-radius: 8px;
}
</style>
