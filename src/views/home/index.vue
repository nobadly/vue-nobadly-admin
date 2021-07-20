<template>
  <section class="home">
    <!-- echarts图表 -->
    <div class="dfl">
      <el-card class="left-card">
      </el-card>
      <el-card class="right-card">
      </el-card>
    </div>
  </section>
</template>

<script>
/**
 * 统计报表- 收发报表
 */
export default {
  name: 'PutSendreport',
  data() {
    return {
      formInline: {
        app: 1,
        step: 1,
        status: 1
      },
      appList: [{ label: '平安产险', value: 1 }],
      stepList: [
        { label: '天', value: 1 },
        { label: '小时', value: 2 },
        { label: '分钟', value: 3 }
      ],
      statusList: [
        { label: '请选择', value: 1 },
        { label: '消息已发送', value: 2 },
        { label: '消息发送失败', value: 3 },
        { label: '消息已送达', value: 4 },
        { label: '消息已阅读', value: 5 },
        { label: '已转短消息已送达', value: 6 }
      ],
      headerList: [
        { label: '客户号码', prop: 'name' },
        { label: '收发类型', prop: 'phone' },
        { label: '状态报告', prop: 'addTime' },
        { label: '回落消息', prop: 'message' },
        { label: '时间', prop: 'time' }
      ],
      tableData: [
        { name: '13316487883', phone: '发送', time: '2021-05-06 12:13:14' }
      ],
      multipleSelection: []
    }
  },
  methods: {
    onSubmit() {
      console.log('查询')
    },
    // 选择表格数据
    handleSelectionChange(val) {
      this.multipleSelection = val.map((v) => v.id)
      console.log(this.multipleSelection)
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  .app {
    width: 120px;
  }
  .step {
    width: 80px;
  }
  .dfl {
    display: flex;
  }
  .right-card {
    width: 40%;
    height: 500px;
  }
  .left-card {
    width: 60%;
    height: 500px;
  }
  .card2 {
    width: 70%;
    height: 500px;
  }
  .card3 {
    width: 30%;
    height: 500px;
  }
}
</style>
