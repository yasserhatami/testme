<template >
  <div>
    <div>
        <navbar class="navbar"></navbar>
    </div>
    <slot />
  </div>
</template>
<script>
import navbar from "@/components/Navbar.vue"
export default {
    components:{
        navbar
    }
};
</script>
<style>
.navbar{
  z-index: -10;
}
</style>