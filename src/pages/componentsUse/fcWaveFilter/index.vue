<template>
  <section>
    <!-- amplitude 振幅 波浪-->
    <!-- dur 动画持续时间 -->
    <!-- delay 填充完展示的时长-->
    <!-- mode模式:  alpha(透明度模式)、luminance(亮度模式)、img(图片模式)、slideshow(幻灯片模式)-->
    <fc-wave-filter
      color="#047"
      style="width:400px;height:400px;"
      mode="img"
      amplitude="1"
      dur="3"
      delay="0.3"
    >
      <img :src="url2" />
      <img :src="url" />
    </fc-wave-filter>
  </section>
</template>

<script>
export default {
  data() {
    return {
      url2: 'https://img1.baidu.com/it/u=1841314284,2779250211&fm=26&fmt=auto',
      msg: '',
      url: 'data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgc3R5bGU9IndpZHRoOjFlbTtoZWlnaHQ6MWVtO3ZlcnRpY2FsLWFsaWduOm1pZGRsZSIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJjdXJyZW50Q29sb3IiIG92ZXJmbG93PSJoaWRkZW4iPjxwYXRoIGQ9Ik0yNjQuMTI5IDI2MS4yNjJjNS4wMjUtNS45NCA0LjI4NS0xNS4yNS0zLjAwOS0yMS40MS02LjQ3NS01LjQzNS0xNi4wODUtMy45MzgtMjAuMzU0IDEuMTk4bC0zOC4wNzcgNDUuMzIzIDIzLjY2MiAxOS44NjYgMzcuNzc4LTQ0Ljk3N3ptLTQzLjkzNy01MC4wMTljLTYuMTQ0LTUuMTA0LTE1LjU2NS01LjI3Ny0xOS43ODctLjMxNWwtMzYuMjAzIDQzLjE2NiAyMi40MDIgMTguNzk0IDM1Ljc5My00Mi42NjFjNC41MzctNS4zNTcgNC41MDYtMTMuMzQ0LTIuMjA1LTE4Ljk4NHptNTY2LjQxMyAxMzUuODE0bC0yMi40NDktMjcuOTE2IDQ0LjcyNS02NS4zNzgtLjI4My0uMzE1LTczLjIwOCAzMC4xMjEtMjIuNjg2LTI3Ljc1OCA3Ny40OTMtOTkuNzIyIDE5LjEyNSAyMy42My00OC41MjIgNjMuNTA1IDc0LjE4NS0zMS44NyAyMC41MTIgMjUuMzYzLTQ2LjU2OSA2NS45MyA3Mi4yLTM0LjI4IDE5LjEyNiAyMy41OTktMTEzLjY0OSA1NS4wOTF6TTUwNy4xNjQgODA3LjAzOGMtMTY1LjYwNSAwLTI5OS44NzUtMTM0LjI1NC0yOTkuODc1LTI5OS44NzQgMC0xNjUuNTczIDEzNC4yNy0yOTkuODQzIDI5OS44NzUtMjk5Ljg0MyAxNjUuNjIgMCAyOTkuODc0IDEzNC4yNTQgMjk5Ljg3NCAyOTkuODQzIDAgMTY1LjYyLTEzNC4yNTQgMjk5Ljg3NC0yOTkuODc0IDI5OS44NzR6TTEyNi45MjkgMjY0Ljk4bDYwLjI5LTcxLjgyMmMxMi41MDgtMTQuODg3IDI5Ljk2NC0yNi43ODIgNDYuNTUyLTEyLjg0IDUuMTA1IDQuMjcgNy4yOTQgNS42ODggMTMuNTAxIDE3LjA0NiAxLjQ2NSA0LjAwMiAyLjU4NCAxMS4yOTYtLjE4OSAxOC40NDggMTQuNDE1LTguOTY0IDI5Ljc5LTYuMDM0IDM5LjcxNiAzLjYyMyAxNS4yODEgMTQuODU2IDEzLjA2IDMxLjk5Ni0xLjQ2NSA0OS4zMjZsLTYzLjU4MyA3NS43NzYtOTQuODIyLTc5LjU1N3ptMzExLjYxLTIwMy4yNTZoMzcuMjI3bDMzLjYxOSA4OCAzMy42MTktODhoMzcuMTYzdjEyMy41NzNoLTI0LjczNHYtODYuM2wtMzIuNTQ3IDg2LjNoLTI3LjA1bC0zMi40ODQtODYuM3Y4Ni4zSDQzOC41NFY2MS43MjR6bTY4LjYyNS0yMy45OTRDMjQ3LjkxOCAzNy43MyAzNy43MyAyNDcuOTE4IDM3LjczIDUwNy4xNjRjMCAyNTkuMjc2IDIxMC4xODggNDY5LjQ4IDQ2OS40MzQgNDY5LjQ4IDI1OS4zMDggMCA0NjkuNDgtMjEwLjIwNCA0NjkuNDgtNDY5LjQ2NVM3NjYuNDcyIDM3LjcxNSA1MDcuMTY0IDM3LjcxNXptMCA3NDkuOTk0YzE1NC45ODYgMCAyODAuNjA3LTEyNS41OSAyODAuNjA3LTI4MC41Nkg1MDcuMTY0Vjc4Ny43NHptLTI4MC41NzYtMjgwLjU2aDI4MC41NzZWMjI2LjYxOWMtMTU0Ljk3MSAwLTI4MC41NzYgMTI1LjYwNS0yODAuNTc2IDI4MC41NDV6bTI4MC41NzYgNDg5LjYzYy0yNjkuOTU4IDAtNDg5LjY0Ni0yMTkuNjU3LTQ4OS42NDYtNDg5LjYzIDAtMjY5Ljk1OCAyMTkuNjg4LTQ4OS42MyA0ODkuNjQ2LTQ4OS42MyAyNzAuMDA1IDAgNDg5LjY0NSAyMTkuNjcyIDQ4OS42NDUgNDg5LjYzIDAgMjY5Ljk3My0yMTkuNjQgNDg5LjYzLTQ4OS42NDUgNDg5LjYzem0wLTk5Ni43OTRDMjI3LjUgMCAwIDIyNy41MDEgMCA1MDcuMTY0YzAgMjc5LjY2MiAyMjcuNTAxIDUwNy4xOTUgNTA3LjE2NCA1MDcuMTk1IDI3OS42OTMgMCA1MDcuMTc5LTIyNy41MzMgNTA3LjE3OS01MDcuMTk1QzEwMTQuMzQzIDIyNy41IDc4Ni44NTcgMCA1MDcuMTYzIDB6IiBmaWxsPSIjQjlCRUMzIi8+PC9zdmc+'
    }
  },
  methods: {}
}
</script>

<style scoped>
</style>
