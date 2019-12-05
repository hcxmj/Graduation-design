<template>
  <div id="login">
    <img src="../img/logo.jpeg"  @click="toHome"/>
    <el-form ref="form" :model="form" label-position="left" label-width="60px">
      <el-form-item label="用户名:">
        <el-input v-model="form.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input v-model="form.pwd" placeholder="请输入密码" show-password></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button @click="onRegister">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        pwd: ""
      }
    };
  },
  methods: {
    onSubmit() {
      // window.console.log(this.form.name)
      this.$ajax
        .post(`${this.$store.state.ip}/login`, {
          name: this.form.name,
          password: this.form.pwd
        })
        .then(response => {
          // window.console.log(response);
          if(response.data.ob.code==1){
            this.$router.push('/index')
          }else if(response.data.ob.code==-1){
            this.$alert('用户名或密码错误')
          }
          this.$store.commit("userInfo",response.data.user)
          window.console.log(this.$store.state)
        })
        .catch(error => {
          window.console.log(error);
        });
    },
    onRegister() {
      this.$router.push("/register");
    },
    toHome(){
      this.$router.push('/home')
    }
  }
};
</script>

<style scoped>
#login {
  margin: 60px auto 0;
  width: 350px;
  height: 350px;
}
img {
  width: 200px;
  height: 150px;
}
</style>