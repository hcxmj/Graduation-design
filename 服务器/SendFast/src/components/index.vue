<template>
  <div>
    <Top1></Top1>
    <Menu1></Menu1>
    <Products1></Products1>
    <Cart1></Cart1>
  </div>
</template>
<script>
import Top1 from "./Top1.vue";
import Menu1 from "./Menu1.vue";
import Products1 from "./Products1.vue"
import Cart1 from "./Cart1.vue";
export default {
    name:'index',
    components: {
    Top1,
    Menu1,
    Products1,
    Cart1
  }
};
</script>
<style scoped>

</style>