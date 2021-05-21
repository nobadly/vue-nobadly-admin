export default {
 bind: function (el, binding) {
    const oDiv = el // 当前元素
    oDiv.onmousedown = function (e) {
        // 鼠标按下，计算当前元素距离可视区的距离
        const disX = e.clientX - oDiv.offsetLeft
        const disY = e.clientY - oDiv.offsetTop
        const width = document.body.clientWidth
        const height = document.body.clientHeight
        document.onmousemove = function (e) {
            // 通过事件委托，计算移动的距离
            const l = e.clientX - disX
            const t = e.clientY - disY
            oDiv.style.cursor = 'move'
            if (e.clientX > 30 && e.clientX < width - 30) {
                // 移动当前元素
                oDiv.style.left = l + 'px'
            }
            if (e.clientY < height - 30 && e.clientY > 30) {
                oDiv.style.top = t + 'px'
            }
            // 将此时的位置传出去
            // binding.value({ x: e.pageX, y: e.pageY }, el)
        }
        document.onmouseup = function (e) {
            document.onmousemove = null
            document.onmouseup = null
            oDiv.style.cursor = 'pointer'
        }
    }
}
}
