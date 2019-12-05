<template>
  <div>
    <div class="top">
      <div class="storeName" @click="toIndex">Send&Fast</div>
      <div class="messag">订单信息</div>
    </div>
    <div class="box">
      <div class="left">
        <div class="leftTop">
          <div class="leftTopBox">订单详情</div>
        </div>
        <div class="checkoutMenu">
          <div>商品</div>
          <div>份数</div>
          <div>小计（元）</div>
        </div>
        <div class="goods" v-for="(item,index) in cartList" :key="index">
          <div class="goodsname">{{item.name}}</div>
          <div class="goodsnum">
            <span class="count">{{item.count}}份</span>

            <!-- <el-input-number size="mini" v-model="num"  :min="0">{{num}} </el-input-number> -->
          </div>
          <div class="goodsprice">¥{{item.price*item.count}}</div>
        </div>
        <div class="send">
          <div class="goodsname">配送费</div>
          <div class="goodsnum"></div>
          <div class="goodsprice">¥4</div>
        </div>
        <div class="chackoutPrice">共计：￥{{allPrice+4}}</div>
      </div>

      <div class="right">
        <div class="leftTop">
          <div class="leftTopBox">
            <i class="el-icon-location-outline"></i>收货地址
          </div>
        </div>
        <div class="payaddress">{{user.address}}</div>
        <div class="checkout">
          <span class="payfor">付款方式</span>

          <span class="paytj">推荐使用在线支付，不用找零，优惠更多</span>
          <div class="payforbox">
            <div>在线支付</div>
            <div>支持微信、支付宝、QQ钱包及大部分银行卡</div>
          </div>
        </div>
        <div class="payselect">
          <div class="payfor">选择优惠</div>
          <div class="payselectBox">
            <span class="redbag">使用红包</span>
            <span class="nobag">无可用红包</span>
          </div>
          <div class="payselectBox">
            <span class="redbag">使用优惠券</span>
            <span class="nobag">网站不支持</span>
          </div>
        </div>
        <div class="othermessage">
          <div class="payfor">其他信息</div>
          <div class="changge">
            <div class="word">配送时间：</div>
            <el-select v-model="value" placeholder="立即送达">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="changge">
            <div class="word">订单备注：</div>
            <el-input v-model="input" class="beizhu"></el-input>
          </div>
          <div class="changge">
            <div class="word">餐具分数：</div>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in copies"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div>
            <el-row>
              <el-button type="success" @click="open">确定下单</el-button>
            </el-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "topay",
  data() {
    return {
      num: 1,
      input: "",
      cartList: [],
      user: {},
      options: [
        {
          value: "选项1",
          label: "立即送达"
        },
        {
          value: "选项2",
          label: "11:30"
        },
        {
          value: "选项3",
          label: "12:00"
        },
        {
          value: "选项4",
          label: "12:30"
        },
        {
          value: "选项5",
          label: "13:00"
        },
        {
          value: "选项6",
          label: "13:30"
        },
        {
          value: "选项7",
          label: "14:00"
        },
        {
          value: "选项8",
          label: "15:00"
        },
        {
          value: "选项9",
          label: "15:30"
        }
      ],
      copies: [
        {
          value: "选项1",
          label: "1份"
        },
        {
          value: "选项2",
          label: "2份"
        },
        {
          value: "选项3",
          label: "3份"
        },
        {
          value: "选项4",
          label: "4份"
        },
        {
          value: "选项5",
          label: "5份"
        },
        {
          value: "选项6",
          label: "6份"
        }
      ],
      value: ""
    };
  },
  methods: {
    toIndex: function() {
      this.$router.push("./index");
    },
    open() {
      this.$ajax.post(`${this.$store.state.ip}/pay`, {
        cartList: this.cartList
      });
      this.$alert("付款成功", {
        confirmButtonText: "确定",
        callback: () => {
          this.$store.state.user.money -= this.allPrice;
          this.$ajax
            .post(`${this.$store.state.ip}/updateMoney`, {
              userID: this.id,
              money: this.$store.state.user.money
            })
            .then(response => {
              this.$router.push("./index");
              window.console.log(response);
            })
            .catch(error => {
              window.console.log(error);
            });
        }
      });
    }
  },
  computed: {
    allPrice: function() {
      var allPrice = 0;
      this.$store.state.cartList.forEach(item => {
        allPrice += item.count * item.price;
      });
      return allPrice;
    }
  },
  mounted() {
    this.user = this.$store.state.user;
    this.cartList = this.$store.state.cartList;
    window.console.log(this.$store.state.user);
  }
};
</script>
<style scoped>
body {
  padding: 0;
  margin: 0;
  background: #fff;
}
.top {
  width: 1180px;
  margin: 0 auto;
  background-color: #0089dc;
  height: 96px;
}
.storeName {
  width: 300px;
  height: 80px;
  /* background: rgba(0, 0, 0, 0.1); */
  float: left;
  /* margin-left: 100px; */
  font-size: 40px;
  font-family: Georgia;
  font-weight: bold;
  text-align: center;
  line-height: 80px;
  color: rgba(22, 20, 20, 0.753);
  cursor: pointer;
}
.messag {
  font-size: 26px;
  color: #fff;
  margin-left: 14px;
  line-height: 96px;
  vertical-align: text-bottom;
}
.messag::before {
  content: "";
  border-left: 1px solid #9cc9ee;
  height: 18px;
  display: inline-block;
  margin-right: 14px;
}
.box {
  width: 1180px;
  height: 800px;
  /* background-color: gold; */
  margin: 0 auto;
}
.left {
  float: left;
  width: 34%;
  /* background-color: green; */
  /* height: 458px; */
  margin-top: 12px;
  background-color: #fff;

  border: 1px solid #e0e0e0;
}
.right {
  /* padding: 25px 20px 150px 30px; */
  height: 767px;
  float: right;
  width: 65%;
  border: 1px solid #e0e0e0;
  /* background-color: aqua; */
  margin-top: 12px;
  text-align: left;
  /* padding: 25px 20px 150px 30px; */
}
.leftTop {
  position: relative;
  padding: 20px;
  /* height: 60px; */
  border-bottom: 1px solid #e0e0e0;
}
.leftTopBox {
  font-size: 16px;
  font-weight: 700;
  color: #333;
}
.checkoutMenu {
  background-color: #fff;
  font-size: 12px;
  font-weight: 700;
  color: #999;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  border-bottom: 1px solid #e0e0e0;
}
.goods {
  display: table;
  table-layout: fixed;
  background-color: #fcfaf8;
  height: 48px;
  line-height: 48px;
  /* padding: 0 18px 0 20px; */
  width: 100%;
  font-size: 14px;
  color: #666;
  display: flex;
  justify-content: space-around;
}
.send {
  display: table;
  table-layout: fixed;
  /* background-color: #fcfaf8; */
  height: 48px;
  line-height: 48px;
  /* padding: 0 18px 0 20px; */
  width: 100%;
  font-size: 14px;
  color: #666;
  display: flex;
  justify-content: space-around;
}
.goodsnum {
  width: 17%;
  margin: 0 auto;
  text-align: center;
}
.goodsname {
  width: 30%;
  font-size: 14px;
  /* background-color: green; */
  text-align: center;
  /* color: #666; */
  margin: auto;
}

.goodsprice {
  width: 25%;
  margin: auto;
  text-align: center;
}
.send {
  height: 41px;
  /* padding-top: 18px; */
}
.chackoutPrice {
  color: #f74342;
  padding: 52px 28px 10px;
  font-size: 46px;
  text-align: right;
}
.payaddress {
  padding: 20px 40px;
  /* height: 150px; */
  border: 1px solid #666;
  /* background: #666; */
}
/* el-icon-location-outline{
    width: 50px;
    height: 50px;
    text-align: left;

} */
.checkout {
  height: 75px;
  padding: 20px;
}
.payfor {
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: 700;
  /* padding: 20px; */
}
.paytj {
  margin-left: 16px;
  font-size: 12px;
  font-weight: 400;
  color: #ff9c00;
}
.payforbox {
  /* float: left; */
  margin-top: 15px;
  padding: 11px 20px;
  width: 49.2%;
  /* height: 90px; */
  border: 1px solid #eee;
  cursor: pointer;
  border-color: #0089dc;
  color: #333;
  font-size: 14px;
  margin-bottom: 15px;
}
.payselect {
  height: 50px;
  padding: 20px;
  margin-bottom: 15px;
  /* background-color: #333 */
}
.payselectBox {
  margin-bottom: 15px;
  font-size: 14px;
}
.redbag {
  margin-right: 20px;
  width: 5em;
  text-align: right;
}
.nobag {
  color: #999;
}
.othermessage {
  height: 50px;
  padding: 20px;
}
.changge {
  display: flex;
  margin-bottom: 15px;
}
.word {
  /* margin: 0 auto; */
  text-align: center;
  line-height: 40px;
  font-size: 14px;
}
.beizhu {
  width: 400px;
}
</style>