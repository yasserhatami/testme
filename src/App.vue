<template>
  <div class="allcontent">
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
    </component>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style scoped>
.allcontent {
  direction: rtl;
}
</style>
