<template>
  <div id="app">
    <Header :users="userlist.username"></Header>
    <router-view @register="showMsg" :userlist="userlist" ></router-view>
  </div>
  
</template>

<script>
import Header from './components/Header'
import home from './components/home'

export default {
  name: 'App',
  components: {
    home,
    Header

  },
  data:function() {
    return {
      user:'wpy',
      userlist:{
        username:'',
        password:'',
      }
    }
  },
  methods: {
    showMsg(val) {
      console.log(val)
    this.userlist.username = val.username
    this.userlist.password = val.password
    }
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
/* 设置全局字体和颜色 */
body {
  font: 14px/1.5 Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
    Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  color: #333;
}
/* 清除默认列表样式 */
li {
  list-style: none;
}
/* 去掉链接的下划线 */
a {
  text-decoration: none;
}

/* 设置清除浮动的类样式 */
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}

.clearfix:after {
  clear: both;
}

.clearfix {
  *zoom: 1;
}
/* 设置盒子默认的宽度和居中显示 */
.w {
  width: 1226px;
  margin: auto;
}
.project_title {
  height: 40px;
  color: cornflowerblue;
  font-style: normal;
  font-size: 20px;
  margin-left: 5px;
}
.lunbo {
  height: 300px;
}
.product {
  height: 320px;
  margin-top: 30px;
  background: #f5f5f5
}
</style>
