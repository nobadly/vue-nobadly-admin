<template>
  <section>
    <el-button @click="onTab(1)">1</el-button>
    <el-button @click="onTab(2)">2</el-button>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      v-watermark="{text:'年后'}"
    >
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <template v-if="isShow">
        <el-form-item label="1" prop="desc2">
          <el-input type="textarea" v-model="ruleForm.desc2"></el-input>
        </el-form-item>
        <el-form-item label="2" prop="desc3">
          <el-input type="textarea" v-model="ruleForm.desc3"></el-input>
        </el-form-item>
      </template>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-autocomplete
    v-model="ruleForm.state"
     @paste.native.capture.prevent="handlePaste"
    placeholder="请输入内容"
    ></el-autocomplete>
  </section>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {},
      ruleForm2: {},
      isShow: false,
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          {
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }
        ],
        date2: [
          {
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }
        ],
        type: [
          {
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }],
        desc2: [{ required: true, message: '请填写1', trigger: 'blur' }],
        desc3: [{ required: true, message: '请填写2', trigger: 'blur' }]
      }
    }
  },
  created() {
    console.log(this.time())
  },
  methods: {
      handlePaste(v) {
          console.log(v, '123132')
      },
    onTab(v) {
      this.isShow = v === 2
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
          console.log(this.ruleForm)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    time() {
      const date = new Date().toLocaleDateString()
      const arr = date.split('/')
      if (arr[1] < 10) {
        arr[1] = '0' + arr[1]
      }
      if (arr[2] < 10) {
        arr[2] = '0' + arr[2]
      }
      return arr.join('-')
    }
  }
}
</script>
