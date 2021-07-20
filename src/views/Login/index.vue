<template>
  <section class="login">
    <el-card class="box" shadow="hover">
      <div class="logo">
        <i class="el-icon-s-promotion"></i>
        <span>5G消息平台</span>
      </div>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="userName">
          <el-input
            type="text"
            prefix-icon="el-icon-s-custom"
            v-model="ruleForm.userName"
            placeholder="请输入用户名称"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            prefix-icon="el-icon-key"
            v-model="ruleForm.password"
            placeholder="请输入登录密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <footer>备案号:✔🎅😍👮‍♀️🎞🌯🚐(❁´◡`❁)</footer>
  </section>
</template>
<script>
/**
 * 登录页面
 */
// import api from '../../http/api'
import util from '@/utils/util'

export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        userName: 'ant',
        password: '123456'
      },
      rules: {
        userName: [{ validator: validatePass }],
        password: [{ validator: validatePass2 }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    async login() {
    //   const res = await this.$QueryPOST(api.LOGIN, { ...this.ruleForm })
      util.setToken('857857')
      window.localStorage.setItem('userName', this.ruleForm.userName)
      this.$router.push('/')
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss">
.login {
  min-width: 100vw;
  min-height: 100vh;
  background: url("../../assets/login_bg.png") no-repeat center center;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  .el-card__body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .box {
    width: 500px;
    height: 580px;
    margin: auto;
    padding: 40px;
    .el-button {
      width: 100%;
    }
  }
  .logo {
    display: flex;
    height: 150px;
    flex-direction: column;
    text-align: center;
    color: #0079fe;
    i {
      font-size: 50px;
    }
    span {
      font-size: 20px;
      font-weight: bold;
      font-family: "微软雅黑 Bold";
      margin-top: 50px;
    }
  }
  footer {
    width: 100%;
    color: #fff;
    text-align: center;
    margin: 60px;
  }
}
</style>
