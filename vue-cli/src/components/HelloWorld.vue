<template>
  <div class="aaa">
    <div class="hello">
      <h1>elm后台管理系统</h1>
      <div class="biaodan">
        <el-input
          placeholder="用户名"
          id="inm"
          v-model="input"
          clearable>
        </el-input>
        <p class="p">{{wasd}}</p>
        <el-input v-model="input1" show-password placeholder="密码" id="inp"></el-input>
        <p class="p">{{wasz}}</p>
          <button @click="deng">登录</button>
        <br>
        <br>
        <ul>
          <li>温馨提示:</li>
          <li>未登录过的新用户，自动登陆</li>
          <li>注册过的用户可凭账号密码的登录</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
  return {
     input: '',
     input1: '',
     wasd:'',
     wasz:''
    }
  },
  methods:{
    deng(){
      let username=document.getElementById('inm').value
      let pass=document.getElementById('inp').value
      let reg=/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/.test(username)
      let pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/.test(pass)
      if (username===''){
          this.wasd='请输入用户名'
      }else{
          this.wasd=''
      }
      if (pass===''){
        this.wasz='请输入密码'
      }
      let data={user_name:username,password:pass}
      this.Axios.post('https://elm.cangdu.org/admin/login',data).then((res)=>{
          if (res.data.success==='登录成功'){
              this.$router.push({path:'/Xiangqing'})
          }
          console.log(res)
      })
    }
  }
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }
  .aaa{
    width: 100%;
    height: 738px;
    background: #324057;
    position: fixed;
  }
  .hello{
    width: 400px;
    margin: 0 auto;
    margin-top: 100px;
  }
  .biaodan{
    width: 95%;
    height: 220px;
    background: white;
    padding: 30px 10px;
    border-radius: 5px;
  }
  .p{
    width: 100%;
    height: 25px;
    line-height: 25px;
    font-size: 10px;
    color: red;
  }
  h1{
    color: white;
    text-align: center;
    padding-bottom: 60px;
  }
  button{
    width: 100%;
    height: 40px;
    color: white;
    border-radius: 5px;
    background: #4DB3FF;
    border: none;
  }
  ul{
    width: 100%;
  }
  li{
    color: red;
    font-size: 12px;
    text-align: center;
  }
</style>
