<template>
  <div class="box">
    <div class="left">
      <div class="probox">
        <div class="protype1" v-for="item in producutList" :key="item.menu_id">
          <img
            :src="item.img"
            class="pic"
          />
          <div class="Pword">
            <div class="picname">{{item.name}}</div>
            <div class="nameword">
             {{item.info}}
            </div>
            <div class="price">{{item.price}}</div>
            <button class="toshop" @click="tocart([item.menu_id,num])">加入购物车</button>
          </div>
        </div>
        
      </div>
    </div>
    <div class="right">
      <div class="rightTop">商家公告</div>
      <p class="massage">
        1.小店延长至晚上22:00打烊，欢迎点餐哦
        2.亲，需要发票、多饭，换汤等可以直接备注或者直接联系我们15228808604！
        3.亲，高峰期间单量集中，建议您提前下单，以免耽误您宝贵的用餐时间！谢谢！！
      </p>
    </div>
  </div>
</template>


<script>
export default {
  name: "Products",
  data() {
    return {
      producutList: [],
      userId:'',
      num:0,
    };


  },
  
  methods:{
       tocart:function(e){
        let menuId=e[0];
        var count=0;
        this.$ajax.get(`${this.$store.state.ip}/selectBefore`,{
          params:{
            userId:this.userId,
            menuId:menuId,
          }
        }).then(res=>{
          if (res.data.length!=0) {
            count=res.data[0].count;  
          }
          count++;
           this.$ajax.post(`${this.$store.state.ip}/insertCart`, {
           userId:this.userId,
           menuId:menuId,
           count:count
         }).then(res=>{
           window.console.log(res.data)
           this.$store.commit('cartInfo',res.data);
           window.console.log(this.$store.state.cartList)
         }).catch(error=>{
           window.console.log(error)
         })
         
        }).catch(error=>{
          window.console.log(error)
          
        })
        // let count=e[1];
         
       }
  },
  mounted() {
    this.userId=this.$store.state.user.id
    this.$ajax
      .post(`${this.$store.state.ip}/getProduct`, {})
      .then(response => {
        this.$store.commit('productInfo',response.data)
        this.producutList=this.$store.state.products;
        // window.console.log(this.producutList);
      })
      .catch(error => {
        window.console.log(error);
      });
    this.$ajax.get(`${this.$store.state.ip}/getCart`,{
      params:{
        userId:this.userId
      }
    }).then(res=>{
      this.$store.commit('cartInfo',res.data);
    }).catch(error=>{
      window.console.log(error)
    })
  }
};
</script>
<style scoped>
.box {
  width: 1180px;
  height: 800px;
  margin: 0 auto;
  /* background-color: green; */
  position: relative;
}

.left {
  width: 885px;
  height: 100%;
  /* background-color: blue; */
  position: absolute;
}
.right {
  width: 279px;
  height: 434px;
  background-color: white;
  position: absolute;
  right: 0;
}

.probox {
  height: 800px;
  width: 885px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  flex-wrap: wrap;
  overflow-y:auto;
}
.protype1 {
  width: 422px;
  height: 100px;
  /* background-color: brown; */
  position: relative;
  border: 1px solid #666;
}
.pic {
  float: left;
  margin-right: 14px;
  width: 100px;
  height: 100px;
}
.Pword {
  padding-top: 10px;
  width: 422px;
  height: 57px;
}
.picname {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 8px;
}
.nameword {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  margin-bottom: 10px;
}
.price {
  font-weight: 700;
  bottom: 10px;
  color: #f74342;
}
.price::before {
  content: "\00a5";
  margin-right: 3px;
  font-size: 12px;
}
.toshop {
  font-size: 14px;
  display: inline-block;
  background-color: #0089dc;
  color: #fff;
  position: absolute;
  right: 10px;
  bottom: 10px;
  border: 0;
  cursor: pointer;
  width: 90px;
  height: 26px;
  line-height: 26px;
  border-radius: 20px;
  text-align: center;
  outline: 0;
}
.rightTop {
  padding: 0 1em;
  line-height: 45px;
  background-color: #0089dc;
  color: #fff;
  font-weight: 400;
}
.massage {
  padding: 10px 15px;
  line-height: 2;
}
</style>