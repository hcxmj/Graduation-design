<template>
  <div id="box">
    <div class="top">
      <div class="storeName">Send&Fast</div>
      <div class="toRegister">
        <el-row>
          <el-button type="info" plain @click="toRegister">新用户注册</el-button>
        </el-row>
      </div>
    </div>
    <div>
      <div class="pic">
        <img src="../img/logo.jpeg" />
      </div>
      <el-row class="allbtn">
        <el-button type="primary" class="btn" round @click="toLogin">用户登录</el-button>
        <el-button type="primary" class="btn" round @click="toAdminLogin">商家登录</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
    methods:{
        toRegister(){
            this.$router.push('/register')
        },
        toLogin(){
            this.$router.push('/login')
        },
        toAdminLogin(){
          this.$router.push('/admin')
        }
    }
}
</script>

<style scoped>
#box {
  /* margin-top: -60px; */
  padding: 0;
}
.top {
  width: 100%;
  height: 80px;
  background: rgba(65, 158, 251, 0.5);
}
.storeName {
  width: 300px;
  height: 80px;
  background: rgba(0, 0, 0, 0.1);
  float: left;
  margin-left: 100px;
  font-size: 40px;
  font-family: Georgia;
  font-weight: bold;
  text-align: center;
  line-height: 80px;
  color: rgba(22, 20, 20, 0.753);
}
.toRegister {
  width: 200px;
  height: 80px;
  /* background: pink; */
  float: right;
  text-align: center;
  line-height: 80px;
  margin-right: 80px;
}
.pic {
  width: 500px;
  margin: 80px auto 20px;
}
.allbtn{
    text-align: center;
}
.btn{
  margin: 0 60px;
}
</style>