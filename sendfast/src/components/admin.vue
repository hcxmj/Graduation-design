<template>
  <div id="adminLogin">
    <img src="../img/logo.jpeg" />
    <el-form ref="storeform" :model="storeform" label-position="left" label-width="50px">
      <el-form-item label="账号:">
        <el-input prefix-icon="el-icon-s-custom" v-model="storeform.name" placeholder="请输入商家账号"></el-input>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input
          prefix-icon="el-icon-lock"
          v-model="storeform.pwd"
          placeholder="请输入密码"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onAdminLogin">登录</el-button>
         <el-button  @click="toHome">返回首页</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      storeform: {
        name: "",
        pwd: ""
      }
    };
  },
  methods: {
    onAdminLogin() {
      window.console.log(this.storeform.name);
      this.$ajax
        .post(`${this.$store.state.ip}/adminLogin`, {
          name: this.storeform.name,
          password: this.storeform.pwd
        })
        .then(response => {
          // window.console.log(response);
          if (response.data.code == 1) {
            this.$router.push("/manage");
          } else if (response.data.code != 1) {
            this.$alert("账号或密码错误");
          }
        })
        .catch(error => {
          window.console.log(error);
        });
    },
    toHome(){
      this.$router.push('/home')
    }
  }
};
</script>

<style scoped>
#adminLogin {
  margin: 60px auto 0;
  width: 350px;
  height: 350px;
}
img {
  width: 200px;
  height: 150px;
}
</style>
