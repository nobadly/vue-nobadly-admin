<template>
  <section class="sideBar">
    <el-scrollbar>
      <el-menu
        :default-active="paths"
        :unique-opened="true"
        class="el-menu-vertical-demo"
        router
      >
        <section v-for="(item) in menuList" :key="item.label">
          <!-- <div class="label">{{ item.label }}</div> -->
          <el-submenu :index="item.label" v-if="item.children &&item.children.length">
            <template slot="title">
              <i class="el-icon-location" :class="{'active':findIndexs(item.children)!== -1}"></i>
              <span :class="{'active':findIndexs(item.children)!== -1}">{{ item.label }}</span>
            </template>
            <div v-if="item.children.length">
              <el-menu-item :index="v.path" v-for="v in item.children" :key="v.path">
                <i class="el-icon-menu"></i>
                <span slot="title">{{ v.meta.title }}</span>
              </el-menu-item>
            </div>
          </el-submenu>
          <el-menu-item :index="item.path" v-else>
                <i class="el-icon-menu"></i>
                <span slot="title">{{ item.meta.title }}</span>
          </el-menu-item>
        </section>
      </el-menu>
    </el-scrollbar>
  </section>
</template>

<script>
/**
 * 左侧菜单栏
 */
export default {
  data() {
    return {}
  },
  computed: {
    menuList() {
      return this.$store.state.permission_routers
    },
    paths() {
        console.log(this.$route)
        const index = this.$route.path.lastIndexOf('/')
        if (index !== 0) {
            return this.$route.path.slice(0, index)
        }
      return this.$route.path
    }
  },
  methods: {
    findIndexs(data) {
      return data.findIndex((v) => v.path === this.paths)
    }
  }
}
</script>

<style lang="less" scoped>
.sideBar {
  .label {
    color: #8c8cb1;
    font-size: 15px;
    margin-bottom: 10px;
  }
  .active {
    color: #409eff;
  }
  .el-scrollbar {
    height: 100%;
    /deep/.el-scrollbar__wrap {
      overflow: auto;
      height: 100%;
    }
  }
}
</style>
