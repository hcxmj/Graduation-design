<template>
  <div class="top">
    <div class="topbox">
      <div class="topLeft">
        <img src="../img/logo.jpeg" class="pic" />
      </div>
      <div class="topRight">
        <div class="rightbox">
          <div id="shopid">起送费</div>
          <div id="shopid">15元</div>
        </div>
        <div class="rightbox">
          <div id="shopid">配送费</div>
          <div id="shopid">3元</div>
        </div>
        <div class="rightbox">
          <div id="shopid">平均送达时间</div>
          <div id="shopid">30分钟</div>
        </div>
        <div class="myself">
          <el-button size="medium" @click="toMyself">个人中心</el-button>
          <el-button size="medium" @click="toLogin">退出登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Top",
  methods: {
    toMyself: function() {
      this.$router.push("/myself");
    },
    toLogin() {
      this.$router.push("/login");
    }
  }
};
</script>
<style scoped>
.top {
  width: 100%;
  height: 142px;
  /* background: gold; */
  background-image: url("https://shadow.elemecdn.com/faas/desktop/media/img/shop-bg.0391dd.jpg");
}
.topbox {
  width: 1180px;
  height: 142px;
  /* background-color: green; */
  margin: 0 auto;
  display: flex;
}
.topLeft {
  width: 400px;
  height: 100%;
  /* background-color: aqua; */
}
.pic {
  width: 100%;
  height: 100%;
}
.topRight {
  width: 700px;
  margin: 40px 0 40px 0;
  display: table-cell;
  vertical-align: middle;
  color: #fff;
  text-align: right;
  display: flex;
  justify-content: space-around;
}
#shopid {
  margin-left: 80px;
  /* width: 42px; */
  height: 40px;
  text-align: center;
}
.myself {
  /* background-color: #666; */
  width: 176px;
  height: 62px;
  color: white;
  cursor: pointer;
  margin-left: 80px;
  display: flex;
  align-items: center;
}
</style>