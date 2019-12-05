<template>
  <div id="register">
    <img src="../img/logo.jpeg" />
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      class="demo-ruleForm"
      label-position="left"
      label-width="80px"
    >
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" show-password></el-input>
      </el-form-item>
      <el-form-item label="联系方式" prop="num">
        <el-input v-model="ruleForm.num"></el-input>
      </el-form-item>
      <el-form-item label="地址" prop="address">
        <el-input v-model="ruleForm.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
        num: "",
        address: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入正确的用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        num: [{ required: true, message: "请输入电话号码", trigger: "blur" }],
        address: [{ required: true, message: "请输入地址", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$ajax
            .post(`${this.$store.state.ip}/register`, {
              name: this.ruleForm.name,
              password: this.ruleForm.password,
              num: this.ruleForm.num,
              address: this.ruleForm.address
            })
            .then(response => {
              window.console.log(response);
              if (response.data.code == 1) {
                this.$alert("注册成功", {
                  confirmButtonText: "登录",
                  callback: () => {
                    this.$router.push("/login");
                  }
                });
              } else if (response.data.code == -1) {
                this.$alert("用户名已存在", {
                  confirmButtonText: "重新注册"
                });
              }
            })
            .catch(error => {
              window.console.log(error);
            });
        } else {
          window.console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped>
#register {
  width: 400px;
  height: 500px;
  margin: 60px auto 0;
}
img {
  width: 200px;
  height: 150px;
}
</style>
