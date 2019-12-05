<template>
  <div>
    <div class="top">我的钱包</div>
    <div class="moneybox">当前余额为：¥{{money}}</div>
  </div>
</template>
<script>
export default {
  name: "money",
  data() {
    return {
      money: ""
    };
  },

  mounted() {
    this.money = this.$store.state.user.money;
    //   window.console.log(this.user)
  }
};
</script>
<style  scoped>
.top {
  /* border-bottom: 2px solid #f4f4f4; */
  padding: 0 20px 11px;
  font-size: 18px;
  font-weight: 700;
}
.moneybox {
  height: 60px;
  line-height: 60px;
  margin: 0 30px;
  padding-left: 19px;
  background-color: #fafafa;
  /* border: 1px solid #f3f3f3; */
}
</style>