<template>
  <div>
    <div class="login">
      <h1 style="text-align: center">用户登录</h1>
      <table>
        <tr>
          <td>用户名:</td>
          <td><input type="text" placeholder="请输入用户名" v-model="username" /></td>
        </tr>
        <tr>
          <td>密码:</td>
          <td><input type="password" placeholder="请输入密码" v-model="password"/></td>
        </tr>
        <tr>
          <td colspan="2" style="text-align: right; margin-top: 5px">
            <button @click="login">登录</button>
            <button @click="reset">重置</button>
          </td>
        </tr>
        <tr>
            <td colspan="2" style="text-align:center; padding-top:15px">
                未有账号，点我<a href="#/register">注册</a>
            </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
    name:"Mylogin",
    data:function() {
        return {
            username:'',
            password:''
        }
    },
    props:{
      userlist:{
        type: Object,
        required: false
      }
    },
    methods:{
        reset() {
            this.username = '',
            this.password = ''
        },
        login() {
            if (this.username == this.userlist.username && this.password == this.userlist.password && this.username != ''
              || (this.username === 'admin' && this.password === '123456')) {
                localStorage.setItem('token','Bearer xxxx'),
                this.$router.push('/home')
                this.$notify({
                  title: '登录成功',
                  message: '欢迎用户,'+ this.username,
                  type: 'success'
        });
            } else {
                alert('用户名或密码错误')
                localStorage.removeItem('token')
            }
        }
    }
};
</script>

<style>
body {
    background-image:url(~@/assets/loginground.jpg);
}
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -165px 0 0 -175px;
  width: 365px;
  height: 300px;
  background-color:rgb(178, 204, 206)
}
.login h1 {
  color: #555555;
  text-shadow: 0px 10px 8px #d4c94f;
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: 20px;
}
.login input{
    padding:10px;
    width:100%;
    color:white;
    margin-bottom:10px;
    background-color:#555555;
    border: 1px solid black;
    border-radius:4px;
    letter-spacing:2px;
}

.login table {
    width: 271px;
    font-size: 15px;
    margin-left: 30px;
}
.login button {
    
    padding:10px;
    margin-left: 20px;
    margin-top: 10px;
    border:1px solid black;
    border-radius:4px;
    cursor:pointer; 
}   

</style>