<template>
  <div>
    <div class="storeName" @click="toIndex">Send&Fast</div>
    <el-container class="my-box">
      <el-header>个人中心</el-header>
      <el-container>
        <el-aside>
          <div class="demo-type">
            <div>
              <el-avatar icon="el-icon-user-solid"></el-avatar>
            </div>
          </div>
          <div class="box">
            <router-link to="/personal">
              <div class="my">个人简介</div>
            </router-link>
          </div>
          <div class="box">
            <router-link to="/money">
              <div class="my">我的钱包</div>
            </router-link>
          </div>

          <div class="box">
            <router-link to="/message">
              <div class="my">修改信息</div>
            </router-link>
          </div>
          <div class="box">
            <router-link to="/order">
              <div class="my">历史订单</div>
            </router-link>
          </div>
        </el-aside>

        <el-container style="text-align:left;">
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  methods: {
    toIndex: function() {
      this.$router.push("./index");
    }
  },

  mounted() {
    this.$router.push("/personal");
    //  this.$router.push('/money')
  }
};
</script>
<style scoped>
.my-box{
  max-height: 800px;
  overflow-y:auto; 
}
.box {
  border-top: 1px solid #666;
}
.storeName {
  cursor: pointer;
  width: 100%;
  height: 80px;
  background: rgba(0, 0, 0, 0.1);
  /* float: left; */
  /* margin-left: 100px; */
  font-size: 40px;
  font-family: Georgia;
  font-weight: bold;
  text-align: center;
  line-height: 80px;
  color: rgba(22, 20, 20, 0.753);
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 80px;
  width: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  /* text-align: center; */
  line-height: 80px;
}

body > .el-container {
  margin-bottom: 40px;
}
.demo-type {
  text-align: center;
}
.my {
  color: #333;
  font-weight: 700;
  font-size: 18px;
}
</style>