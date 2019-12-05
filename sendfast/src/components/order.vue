<template>
  <div>
    <div class="top">历史订单</div>
    <div class="orderBox">
      <div v-for="(item,index) in payed" :key="index" class="singleBox">
        <img :src='item.img'/>
        <span>{{item.name}}</span>
        <span>{{item.count}}</span>
        <span>￥{{item.price}}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "order",
  data(){
    return{
      payed:[]
    }
  },
  mounted(){
    this.$ajax.post(`${this.$store.state.ip}/getPayed`,{
      userId:this.$store.state.user.id
    }).then(response=>{
      this.payed=response.data
      window.console.log(response)
    }).catch(error=>{
        window.console.log(error)
    })
  }
};
</script>
<style scoped>
.top {
  padding: 0 20px 11px;
  font-size: 18px;
  font-weight: 700;
}
.orderBox {
  margin: 0 30px;
}
.singleBox {
  height: 60px;
  line-height: 60px;
  margin-bottom: 10px;
  background: #fafafa;
  padding-left: 19px;
  display: flex;
  align-items: center;
}
.singleBox > img {
  width: 40px;
  height: 40px;
  margin: 0 40px 0 0;
}
.singleBox>span{
    margin-right: 40px;
}
</style>