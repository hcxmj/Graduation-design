<template>
  <div>
    <div class="top">个人简介</div>
    <div class="box2">
      <div>用户名：{{user.name}}</div>
      <div>电话：{{user.num}}</div>
      <div>收货地址：{{user.address}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "personal",
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {},
      user: {}
    };
  },
  mounted() {
    this.user = this.$store.state.user;
    window.console.log(this.user);
  }
};
</script>
<style scoped>
.top {
  /* border-bottom: 2px solid #f4f4f4; */
  padding: 0 20px 11px;
  font-size: 18px;
  font-weight: 700;
}
.box2 {
  margin: 0 30px;
}
.box2 > div {
  height: 60px;
  line-height: 60px;
  margin-bottom: 10px;
  background: #fafafa;
  padding-left: 19px;
}
</style>
