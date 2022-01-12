/**
 * watermark 指令
 * 解决: 给页面生成水印
 * 基本原理：给选择器添加背景图片
 * 用法：v-watermark="{options}"
 * option:
 * @param {string} text 水印文字
 * @param {string} width 宽度
 * @param {string} textColor 文字颜色
 */
// Vue.directive('watermark', (el, binding) => {
//     function addWaterMarker (str, parentNode, font, textColor) {
//         var can = document.createElement('canvas')
//         parentNode.appendChild(can)
//         can.width = 400
//         can.height = 200
//         can.style.display = 'none'
//         var cans = can.getContext('2d')
//         cans.rotate(-20 * Math.PI / 180)
//         cans.font = font || '16px Microsoft JhengHei'
//         cans.fillStyle = textColor || 'rgba(180, 180, 180, 0.3) '
//         cans.textAlign = 'center'
//         cans.textBaseline = 'Middle'
//         cans.fillText(str, can.width / 3, can.height / 2)
//         parentNode.style.backgroundImage = 'url(' + can.toDataURL('image / png') + ') '
//     }
//     addWaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor)
// })
export default {
    bind: function(el, bind) {
        console.log(123)
        const { font, textColor, text } = bind.value
        const can = document.createElement('canvas')
        el.appendChild(can)
        can.width = 400
        can.height = 200
        can.style.display = 'none'
        const cans = can.getContext('2d')
        cans.rotate(-20 * Math.PI / 180)
        cans.font = font || '16px Microsoft JhengHei'
        cans.fillStyle = textColor || 'rgba(180, 180, 180, 0.5) '
        cans.textAlign = 'center'
        cans.textBaseline = 'Middle'
        cans.fillText(text, can.width / 3, can.height / 2)
        el.style.backgroundImage = 'url(' + can.toDataURL('image / png') + ') '
    }
}
