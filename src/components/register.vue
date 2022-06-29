<template>
<div>
    <div class="register">
      <h1 style="text-align: center">用户注册</h1>
      <table>
        <tr>
          <td>用户名:</td>
          <td><input type="text" placeholder="请输入用户名" v-model="userlist.username" /></td>
        </tr>
        <tr>
          <td>密码:</td>
          <td><input type="password" placeholder="请输入密码" v-model="userlist.password"/></td>
        </tr>
        <tr>
          <td>确认密码:</td>
          <td><input type="password" placeholder="请输入密码" v-model="userlist.pwd"/></td>
        </tr>
        <tr>
          <td colspan="2" style="text-align: right; margin-top: 5px">
            <button @click="register">注册</button>
            <button @click="reset">重置</button>
          </td>
        </tr>

      </table>
    </div>
  </div>
</template>

<script>
export default {
    name:"Myregister",
    props:['recive'],
    data:function() {
        return {
            userlist:{
              username:'',
              password:'',
              pwd:''
            }
        }
    },
    methods:{
        reset() {
            this.userlist.username = '',
            this.userlist.password = '',
            this.userlist.pwd = '' 
        },
        register() {
            if (this.userlist.pwd != this.userlist.password ) {
                alert('两次输入密码不一致')
            } else if (this.userlist.username === '' || this.userlist.password === '')  {
                alert('用户名不能为空')
            } else {
                alert('注册成功!')
                this.$router.push('/login')
                // this.userlist.push()
                this.$emit('register',this.userlist)
            }
        }
    }
}
</script>

<style>
.register {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -165px 0 0 -175px;
  width: 365px;
  height: 300px;
  background-color:rgb(178, 204, 206)
}
.register h1 {
  color: #555555;
  text-shadow: 0px 10px 8px #d4c94f;
  letter-spacing: 2px;
  text-align: center;
  margin-bottom: 20px;
}
.register input{
    padding:10px;
    width:100%;
    color:white;
    margin-bottom:10px;
    background-color:#555555;
    border: 1px solid black;
    border-radius:4px;
    letter-spacing:2px;
}

.register table {
    width: 271px;
    font-size: 15px;
    margin-left: 30px;
}
.register button {
    
    padding:10px;
    margin-left: 20px;
    margin-top: 10px;
    border:1px solid black;
    border-radius:4px;
    cursor:pointer; 
}   

</style>