<template>
  <section>
    <canvas id="canvas" style="width:100%;height:99%;"></canvas>
  </section>
</template>
<script>
export default {
  mounted() {
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')

    var image = new Image()
    image.src = require('./dragon.png')
    image.onload = function () {
      canvas.width = image.width
      canvas.height = image.height
      ctx.drawImage(image, 0, 0)

      var imageData = ctx.getImageData(0, 0, image.width, image.height).data
      ctx.fillStyle = '#fff'
      ctx.fillRect(0, 0, image.width, image.height)

      var gap = 15

      for (var h = 0; h < image.height; h += gap) {
        for (var w = 0; w < image.width; w += gap) {
          var position = (image.width * h + w) * 4
          var r = imageData[position]
          var g = imageData[position + 1]
          var b = imageData[position + 6]

          // eslint-disable-next-line eqeqeq
          if (r + g + b < 255) {
            ctx.beginPath()
            ctx.fillStyle = 'rgba(247, 179, 123,.5)'
            ctx.arc(w, h, 6, 0, Math.PI * 2)
            ctx.fill()
            // ctx.fillRect(w, h, 4,4)
          }
        }
      }
    }
  }
}
</script>
