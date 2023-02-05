<template>
  <v-layout>
    <v-toolbar class="toolbar app">
      <v-app-bar prominent class="pb-15 appbar">
        <Hamburger class="Hamburger mr-5 p-2" variant="text" @click.stop="drawer = !drawer"></Hamburger>
        <v-img alt="apsol" height="40" width="20"  src="@/assets/photo/apsol.png"></v-img>
        <div class="d-flex ml-4">
            <v-btn class="bell text-white" variant="text" icon="mdi-bell"></v-btn>
            <div class="notif">18</div>
        </div>
      </v-app-bar>

      <v-navigation-drawer class="drawer" height="25" v-model="drawer" location="top">
        <v-list class="mt-6" :items="items"></v-list>
      </v-navigation-drawer>
    </v-toolbar>
  </v-layout>
</template>

<script>
import Hamburger from "@/components/Hamburger.vue";
export default {
  name: "NavbarComponent",
  data() {
    return {
      drawer: false,
      group: null,
      items: [
        {
          title: "one",
          value: "one"
        },
        {
          title: "two",
          value: "two"
        },
        {
          title: "three",
          value: "three"
        },
        {
          title: "four",
          value: "four"
        }
      ]
    };
  },
  components: {
    Hamburger
  }
};
</script>
<style scoped>
.notif{
    border-radius: 50%;
    background-color: red;
    width: 13px;
    height: 13px;
    position: absolute;
    font-size: 10px;
    color: white;
}
.bell{
    position: relative;
    height: 25px;
    width: 30px;
}
.appbar {
  background-color: #23e0fd;
  z-index: -10;
}
.Hamburger {
  cursor: pointer;
}
.fliexlist{
  background-color: #23e0fd;
  
}
.toolbar{
  z-index: -10;
  
}


</style>