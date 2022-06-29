<template>
  <div class="header">
    <div class="header-welcome">欢迎来到**商城</div>
    <div class="fr">

<el-link type="success" disabled>欢迎您：{{users}}</el-link>
      <span>|</span>
      <a href="#/home">返回首页</a>
      <span>|</span>
      <a href="#/order">我的订单</a>
      <span>|</span>
      <a href="#/login">登录</a>
    </div>
  </div>
</template>

<script>
export default {
props:{
  users:{
    type: String,
  }}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  height: 32px;
  background-color: rgb(177, 162, 162);
}
.header-welcome {
  float: left;
  margin-left: 100px;
  line-height: 32px;
}
.fr {
  float: right;
  margin-right: 200px;
  line-height: 32px;
}
.fr span {
  margin: 15px;
}
.fr a:hover {
  color:blue
}
</style>
