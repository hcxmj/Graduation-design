<template>
  <div class="change">
    <div class="top">修改信息</div>
    <div class="box1">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="iphone">
          <el-input v-model="ruleForm.iphone"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="date1">
          <el-input v-model="ruleForm.date1"></el-input>
        </el-form-item>
        <el-form-item label="收货地址" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="pic">
      <el-upload
        class="avatar-uploader"
        action="`${this.$store.state.ip}/uploadImgs`"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {},
      ruleForm: {
        name: "",
        iphone: "",
        date1: "",
        desc: "",
        imageUrl: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 13, message: "长度在 3 到 13 个字符", trigger: "blur" }
        ],
        date1: [{ required: true, message: "请输入密码", trigger: "blur" }],
        iphone: [
          { required: true, message: "请输入电话", trigger: "blur" },
          { min: 11, max: 11, message: "长度在11 个字符", trigger: "blur" }
        ],
        desc: [{ required: true, message: "请填写收货地址", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$ajax
            .post(`${this.$store.state.ip}/updateUser`, {
              name: this.ruleForm.name,
              num: this.ruleForm.iphone,
              password: this.ruleForm.date1,
              address: this.ruleForm.desc,
              id: this.user.id,
              img: this.ruleForm.imageUrl
            })
            .then(response => {
              alert("修改成功!");
              window.console.log(response);
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
    },
    handleAvatarSuccess(res) {
      this.ruleForm.imageUrl = res.url;
      window.console.log(this.ruleForm.imageUrl);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  },
  mounted() {
    this.user = this.$store.state.user;
    this.ruleForm.name = this.user.name;
    this.ruleForm.iphone = this.user.num;
    this.ruleForm.date1 = this.user.password;
    this.ruleForm.desc = this.user.address;
    window.console.log(this.user);
  }
};
</script>

<style scoped>
.change {
  /* display: flex;
    justify-content: space-between; */
  position: relative;
}
.top {
  /* border-bottom: 2px solid #f4f4f4; */
  padding: 0 20px 11px;
  font-size: 18px;
  font-weight: 700;
}
.box1 {
  width: 550px;
  margin: 0 30px;
}
.pic {
  float: right;
  top: 25%;
  right: 20%;
  position: absolute;
  border: 1px dashed #666;
  border-radius: 14%;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>