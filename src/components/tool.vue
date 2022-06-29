<template>
  <div>
      <div class="home-tool-bar">
          <a href="#top">
            <img src="../assets/toolbar6.png" alt="" class="static" height="60px" width="60px"><br>
            <!-- <img src="images/toolbar6-hover.png" alt="" class="hover"> -->
            <span style="margin-left: 11px; ">回顶部</span>
        </a>
        <div style="text-align:center;">
      <el-avatar icon="el-icon-user-solid"></el-avatar>
    </div>
        <button @click="back">退出登录</button>
      </div>
  </div>
</template>

<script>
export default {
methods: {
  back() {
    const token = localStorage.removeItem('token')
    this.$notify({
          title: '退出成功',
          message: '再见',
          type: 'success'
        });
  }
},
}
</script>

<style>
.home-tool-bar {
    position: fixed;
    bottom: 60px;
    right: 50px;
    height: 114px;
    width: 59px;
}
</style>