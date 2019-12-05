<template>
  <div id="box">
    <div class="top">
      <div class="storeName">Send&Fast</div>
      <div class="exit">
        <el-row>
          <el-button type="info" plain @click="toAdmin">退出登录</el-button>
        </el-row>
      </div>
    </div>
    <div class="nav">
      <el-tabs style="height: 500px;">
        <el-tab-pane label="菜单管理">
          <div class="searchbox">
            <el-input
              placeholder="请输入内容"
              v-model="input"
              prefix-icon="el-icon-search"
              clearable
              style="width:600px;"
            ></el-input>
            <el-button type="primary" icon="el-icon-search" circle @click="search"></el-button>
          </div>
          <div class="bigbox">
            <div v-if="flag">没有搜索到相关内容</div>
            <div class="allInfo" v-for="item in productList" v-bind:key="item.menu_id">
              <div class="infoLeft">
                <img :src="item.img" />
                <span>{{item.name}}</span>
                <span>￥{{item.price}}</span>
              </div>
              <div class="infoRight">
                <span @click="toModify(item.menu_id)">修改</span>
                <span>|</span>
                <span @click="deleteProduct(item)">删除</span>
              </div>
            </div>
          </div>
          <el-button type="primary" round @click="toInsert">添加菜品</el-button>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      productList: [],
      flag: false
    };
  },
  methods: {
    toAdmin() {
      this.$router.push("/admin");
    },
    deleteProduct(e) {
      let id = e.menu_id;
      //   window.console.log(id);
      this.$confirm("是否删除?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(() => {
          this.$ajax
            .post(`${this.$store.state.ip}/delete`, {
              id: id
            })
            .then(response => {
              window.console.log(response);
              this.$ajax
                .post(`${this.$store.state.ip}/getProduct`, {})
                .then(response => {
                  this.productList = response.data;
                  // window.console.log(response);
                })
                .catch(error => {
                  window.console.log(error);
                });
            })
            .catch(error => {
              window.console.log(error);
            });
        })
        .catch(error => {
          window.console.log(error);
        });
    },
    toModify(e) {
      window.console.log(e);
      this.$router.push({ path: "/modify", query: { id: `${e}` } });
    },
    search() {
      // window.console.log(this.input)
      this.$ajax
        .get(`${this.$store.state.ip}/source`, {
          params: {
            name: this.input
          }
        })
        .then(response => {
          this.productList = response.data;
          if (this.productList.length == 0) {
            this.flag = true;
          }
        })
        .catch(error => {
          window.console.log(error);
        });
    },
    toInsert() {
      this.$router.push("/insert");
    }
  },
  watch: {
    input() {
      if (this.input == "") {
        this.$ajax
          .post(`${this.$store.state.ip}/getProduct`, {})
          .then(response => {
            this.productList = response.data;
            this.flag = false;
            // window.console.log(response);
          })
          .catch(error => {
            window.console.log(error);
          });
      }
    }
  },
  mounted() {
    this.$ajax
      .post(`${this.$store.state.ip}/getProduct`, {})
      .then(response => {
        this.productList = response.data;
        // window.console.log(response);
      })
      .catch(error => {
        window.console.log(error);
      });
  }
};
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
.storeName {
  width: 300px;
  height: 80px;
  background: rgba(0, 0, 0, 0.1);
  float: left;
  margin-left: 100px;
  font-size: 40px;
  font-family: Georgia;
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
.nav {
  width: 900px;
  height: 70px;
  margin: auto;
}
.el-button {
  margin: 10px;
}
.bigbox {
  width: 1000px;
  height: 500px;
  overflow-y: scroll;
  margin-top: 15px;
}
.allInfo {
  width: 900px;
  height: 80px;
  /* background: pink; */
  /* border-bottom: 1px solid gray; */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.infoLeft {
  /* width: 700px; */
  height: 80px;
  /* background: gray; */
  float: left;
  display: flex;
  align-items: center;
}
.infoLeft > img {
  width: 40px;
  height: 40px;
  margin: 0 20px;
}
.infoLeft > span {
  margin-right: 20px;
}
.infoRight {
  float: right;
  /* background: greenyellow; */
  /* width: 200px; */
  height: 80px;
  line-height: 80px;
  text-align: center;
}
.infoRight > span {
  margin-right: 10px;
  cursor: pointer;
}
</style>