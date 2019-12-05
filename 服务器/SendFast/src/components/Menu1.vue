<template>
  <div class="menu1">
<div class="line">
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#0089dc"
  text-color="white"
  active-text-color="#ffd04b">
  <el-menu-item index="1">所有商品</el-menu-item>
   <el-menu-item index="2">评价</el-menu-item>
  <!-- <el-submenu index="2"> -->
    <!-- <template slot="title">评价</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu> -->
  <!-- </el-submenu> -->
  <el-menu-item index="3" >商家资质</el-menu-item>

  <el-menu-item index="4">订单管理</el-menu-item>
</el-menu>

</div>

 </div>

</template>


<script>
export default {
     name: "Menu1",
     data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        window.console.log(key, keyPath);
      }
    }

};
</script>
<style scoped>
.menu1{
width: 100%;
height: 59px;
/* background-color: gold; */
margin-bottom: 10px
}
.line{
    width: 1180px;
    height: 100%;
     margin: 0 auto;
     /* background-color: aqua; */
     display: flex;
     flex-direction: row;
    background-color:  #0089dc;
    border-bottom: 5px 

}

</style>