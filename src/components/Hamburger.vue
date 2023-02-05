<template >
  <div>
    <div class="bar1"></div>
    <div class="bar1"></div>
    <div class="bar2"></div>
  </div>
</template>
<script>
export default {
    name : "HamburgerComponent"
};
</script>
<style scoped>
div {
  direction: rtl;
  color: white;
}
.bar1 {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 3px 0;
}
.bar2 {
  width: 16px;
  height: 3px;
  background-color: white;
  margin: 3px 0;
}
</style>