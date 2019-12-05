<template>
  <div id="box">
    <div class="top">
      <div class="modifyInfo">修改菜单</div>
      <div class="exit">
        <el-row>
          <el-button type="info" plain @click="toManage">返回菜单</el-button>
        </el-row>
      </div>
    </div>
    <div class="table">
      菜名：
      <el-input v-model="input" style="width:300px;" class="input" ></el-input>
      <br />价格：
      <el-input v-model="price" style="width:300px;" class="input" ></el-input>
      <br />
      <el-input
        type="textarea"
        :rows="2"
        v-model="textarea"
        style="width:300px;"
        class="text"
      ></el-input>
      <el-upload
        class="upload-demo"
        :action="`${this.$store.state.ip}/uploadImgs`"
        :file-list="fileList"
        list-type="picture"
        :on-success='upload'
      >
        <el-button size="small" plain>上传图片</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
      <el-button round type="primary" class="btn" @click="submit(product.menu_id)">提交</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      price: "",
      textarea: "",
      fileList: [],
      product:{},
      url:""
    };
  },
  methods: {
    toManage() {
      this.$router.push("/manage");
    },
    submit(e){
        this.$ajax.post(`${this.$store.state.ip}/update`,{
            id:e,
            name:this.input,
            price:this.price,
            info:this.textarea,
            img:this.url
        }).then(response=>{
            window.console.log(response)
            if(response.data.code==1){
                this.$alert("修改成功",{
                    callback:()=>{
                        this.$router.push('/manage')
                    }
                })
            }
        }).catch(error=>{
            window.console.log(error)
        })
    },
    upload(response){
        this.url=response.url
        window.console.log(this.url)
    }
  },
  mounted() {
    //   window.console.log(this.$route.query.id)
    this.$ajax.get(`${this.$store.state.ip}/getById`,{
        params:{
            id:this.$route.query.id
        }
    }).then(response=>{
        this.product=response.data[0];
        this.input=this.product.name;
        this.price=this.product.price;
        this.textarea=this.product.info;
        this.url=this.product.img
    }).catch(error=>{
        window.console.log(error)
    })
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
.modifyInfo {
  width: 300px;
  height: 80px;
  background: rgba(0, 0, 0, 0.1);
  float: left;
  margin-left: 100px;
  font-size: 36px;
  font-family: Arial;
  font-weight: bold;
  text-align: center;
  line-height: 80px;
  color: rgba(22, 20, 20, 0.753);
}
.exit {
  width: 200px;
  height: 80px;
  /* background: pink; */
  float: right;
  text-align: center;
  line-height: 80px;
  margin-right: 80px;
}
.table {
  width: 500px;
  /* height: 500px; */
  margin: 100px auto 0;
}
.input {
  margin-bottom: 30px;
}
.text {
  margin-left: 50px;
  margin-bottom: 30px;
}
.btn{
    margin-top: 50px;
}
</style>