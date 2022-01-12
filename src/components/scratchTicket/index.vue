<template>
  <section class="scratchTicket">
    <canvas id="canvas" :width="width" :height="height"></canvas>
    <span class="text" :style="{lineHeight:height+'px'}">恭喜您获得100w</span>
  </section>
</template>

<script>
/**
 * 刮刮乐
 */
export default {
  props: {
      config: {
          type: Object,
          default: () => {
              return {
                  width: 200,
                  height: 100
              }
          }
      },
      width: {
          type: Number,
          default: 200
      },
      height: {
          type: Number,
          default: 100
      }
  },
  mounted() {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    const arr = this.getOffset(canvas)
    // 填充的颜色
    ctx.fillStyle = 'darkgray'
    // 填充矩形 fillRect(起始X,起始Y,终点X,终点Y)
    ctx.fillRect(0, 0, this.width, this.height)
    ctx.fillStyle = '#fff'
    // 绘制填充文字
    ctx.textAlign = 'center'
    ctx.fillText('刮刮卡', this.width / 2, this.height / 2)

    let isDraw = false
    canvas.onmousedown = function () {
      console.log(1231)
      isDraw = true
    }
    canvas.onmousemove = function (e) {
      if (!isDraw) return
      // 计算鼠标在canvas里的位置
      //   console.log(e, canvas.offsetLeft)
      const x = e.offsetX
      const y = e.offsetY
      // 设置globalCompositeOperation
      ctx.globalCompositeOperation = 'destination-out'
      console.log('移动')
      // 画圆
      ctx.arc(x, y, 10, 0, 2 * Math.PI)
      // 填充圆形
      ctx.fill()
      ctx.closePath()
    }
    canvas.onmouseup = function () {
      isDraw = false
    }
     /* 增加触摸监听 */
    document.addEventListener('touchstart', function() {
        isDraw = true
    }, false)

    document.addEventListener('touchmove', function(e) {
    if (!isDraw) return
      // 计算鼠标在canvas里的位置
      const x = e.touches[0].pageX - arr[0]
      const y = e.touches[0].pageY - arr[1]
      // 设置globalCompositeOperation
      ctx.globalCompositeOperation = 'destination-out'
      // 画圆
      ctx.arc(x, y, 10, 0, 2 * Math.PI)
      // 填充圆形
      ctx.fill()
      ctx.closePath()
    })
  },
  methods: {
    getOffset(obj) {
            var valLeft = 0; var valTop = 0
            function get(obj) {
                valLeft += obj.offsetLeft
                valTop += obj.offsetTop
                /* 不到最外层就一直调用，直到offsetParent为body */
                if (obj.offsetParent.tagName !== 'BODY') {
                    get(obj.offsetParent)
                }
                return [valLeft, valTop]
            }
            return get(obj)
        }
  }
}
</script>

<style scoped>
.scratchTicket {
    text-align: center;
}
.text {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  line-height: 100%;
  z-index: -1;
}
</style>
