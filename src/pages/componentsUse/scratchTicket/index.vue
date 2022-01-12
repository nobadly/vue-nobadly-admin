<template>
  <section>
    <ticket></ticket>
  </section>
</template>

<script>
import ticket from '@/components/scratchTicket'
export default {
  components: { ticket },
  data() {
    return {
    }
  },
  mounted() {
    //  const a = prompt('请输入图片地址', '我不输')
    //  console.log(a)
    // const a = 'LiftSdtConfig(id=e9135ddbf0fd11eb840aa4bb6d4dc680, deviceCode=B477485012C4, peopleFlow=0, motorcyclesSwitch=0, soothingVoice=0, hotSpot=1, transmissionMode=1, hotSpotName=, hotSpotPwd=, wifiSsid=, wifiPwd=, alarm=null, floor=null, vibrationRange=null, doorTime=null, speed=null, status=null)'
    // const b = a.match(/(?<=[(]).+(?=[)])/)[0].split(',')
    // console.log(b)
    // console.log(/(?<=\()\S+(?=\))/.exec(a))
  },
  methods: {
    downFile(url, name) {
        const that = this
      var xhr = new XMLHttpRequest()
      xhr.open('GET', url, true)
      xhr.responseType = 'arraybuffer' // 返回类型blob
      xhr.onload = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const blob = this.response
          that.downloadPDF(blob, name)
        }
      }
      xhr.send()
    },
    downloadPDF(data, name = 'file.docx') {
      if (!data) {
        return
      }
      var blob = new Blob([data])
    //   , {
    //     type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'
    //   }
      var url = window.URL.createObjectURL(blob)
      var aLink = document.createElement('a')
      aLink.style.display = 'none'
      aLink.href = url
      aLink.setAttribute('download', name)
      document.body.appendChild(aLink)
      aLink.click()
      document.body.removeChild(aLink) // 下载完成移除元素
      window.URL.revokeObjectURL(url) // 释放掉blob对象
    }
  }
}
</script>

<style>
</style>
