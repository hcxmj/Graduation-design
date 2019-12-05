<template>
  <div class="cart">
    <div cart-box>
      <div class="cartTop">
        <i class="el-icon-shopping-cart-2"></i>
        购物车
      </div>
      <div class="goodsbox" v-for="(item,index) in cartList" :key="index">
        <div class="goodsname">{{item.name}}</div>
        <div class="goodsnum">
        <span class="desc" @click="descCount(item.count,item.menu_id)"> - </span>
        <span class="count"> {{item.count}} </span>
        <span class="up" @click="upCount(item.count,item.menu_id)"> + </span>
        </div>
        <!-- <el-input-number size="mini" :min="0" v-model="item.count" @change="changeCart(item.count,item.id)"></el-input-number> -->
        <div class="goodsprice">¥{{item.price*item.count}}</div>
      </div>
    </div>

    <div class="cartfooter">
      <div class="total">总价:{{allPrice}}元</div>
      <div class="pay" @click="topay">去结算</div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Cart",
  data() {
    return {};
  },

  methods: {
    descCount(count,menuId) {
      count--;
      window.console.log(count,menuId)
      this.$ajax.post(`${this.$store.state.ip}/updateCount`,{
        userId:this.$store.state.user.id,
        menuId:menuId,
        count:count
      }).then(res=>{
        this.$store.state.cartList=res.data;
      })
    },
    upCount(count,menuId) {
      count++;
      this.$ajax.post(`${this.$store.state.ip}/updateCount`,{
        userId:this.$store.state.user.id,
        menuId:menuId,
        count:count
      }).then(res=>{
        this.$store.state.cartList=res.data;
      })
    },
    topay: function() {
      this.$router.push("/topay");
    }
  },
  computed: {
    cartList: function() {
      return this.$store.state.cartList;
    },
    allPrice: function() {
      var allPrice=0;
      this.$store.state.cartList.forEach(item => {
        allPrice += item.count * item.price;
      });
      return allPrice;
    }
  },
  mounted() {
    setTimeout(() => {
      this.cartList = this.$store.state.cartList;
      window.console.log(this.cartList);
    }, 3000);
  }
};
</script>
<style scoped>
.cart {
 
  width: 320px;
  /* height: 200px; */
  bottom: 0;
  background-color: white;
  position: absolute;
  right: 0;
  position: fixed;
  border: 1px solid #666;
}
.cart-box{
 max-height: 300px;
  overflow-y: scroll;
  width: 340px;
}
.cartTop {
  padding: 0 1em;
  line-height: 45px;
  background-color: #0089dc;
  color: #fff;
  font-weight: 400;
  text-align: center;
  display: fixed;
  top: 0;
  left: 0;
}
.goodsbox {
  /* height: 80px; */
  /* background-color: gold; */
  display: flex;
  justify-content: space-between;
  text-align: center;
  /* margin: 10px; */
  padding: 10px 0;
}
.goodsname {
  width: 130px;
  font-size: 14px;
  /* background-color: green; */
  text-align: center;
  color: #666;
  margin: auto;
}
.goodsnum {
  width: 50px;
  display: flex;
  /* background-color: aqua; */
  text-align: center;
  border: 1px solid #666;
}
.goodsprice {
  width: 75px;
  margin: auto;
  text-align: center;

  /* margin: 0 auto; */
  /* line-height: 50%; */
  /* background-color: blueviolet; */
  /* text-align: right; */
  color: #f17530;
}
.desc{
  border-right: 1px solid #666;
  text-align: center;
  width: 65px;
cursor: pointer;
}
.up{
  border-left: 1px solid #666;
  text-align: center;
  width: 65px;
  cursor: pointer;

}
.cartfooter {
  height: 50px;
  line-height: 50px;
  /* background-color: red; */
  margin-bottom: 0;
  display: flex;
  text-align: center;
  border-top: 1px solid #666;
}
.total {
  width: 50%;
  /* background-color: #f17530; */
}
.pay {
  width: 50%;
  /* background-color: blue; */
  border-left: 1px solid #666;
  background-color: #51d862;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
}
.count{
  display: inline-block;
  margin: 0 5px;
  /* border: 1px solid #666; */
}
.goodsbox>span {
cursor: pointer;
}
</style>