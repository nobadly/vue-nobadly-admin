<template>
  <section class="header">
    <div class="logo">LOGO</div>
    <div class="right">
    <el-dropdown  @command="handleCommand">
      <span class="el-dropdown-link">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <span class="userName">{{name}}</span>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item disabled command="1">修改资料</el-dropdown-item>
        <el-dropdown-item disabled command="2">修改头像</el-dropdown-item>
        <el-dropdown-item disabled command="3">修改密码</el-dropdown-item>
        <el-dropdown-item command="4">退出系统</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
      <!-- <div class="headPortrait">
        <i class="el-icon-user-solid"></i>
      </div> -->
    </div>
  </section>
</template>

<script>
/**
 * 头部
 */
import util from '@/utils/util'

export default {
    data() {
        return {

        }
    },
    computed: {
        name() {
            return window.localStorage.getItem('userName')
        }
    },
    methods: {
        // 退出
        handleCommand(command) {
            if (command === '4') {
                console.log(111, command)
                util.removeToken()
                this.$router.push('/login')
            }
        }
    }
}
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 86px;
  background: #001529;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  .headPortrait {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 20px;
    border-radius: 50%;
    background: #fff;
    i {
        color: #000;
    }
  }
  .el-dropdown-link {
      color: #fff;
  }
  .userName {
      margin-left: 5px;
  }
  .el-avatar {
      vertical-align: middle;
  }
  .right {
      display: flex;
      align-items: center;
  }
}
</style>
