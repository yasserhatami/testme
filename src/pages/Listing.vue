<template >
  <v-card class="content">
    <div class="d-flex justify-center">
      <input
        class="search border mt-5 w-100 mx-3 p-4 bg-grey-lighten-3"
        type="text"
        placeholder="جستجو"
      />
    </div>
    <div class="d-flex justify-center mt-3">
      <router-link class="link" to="/wallet">کیف پول</router-link>
    </div>
    <div class="mx-2 mt-5">
      <v-card class="border w-100 h-50 pb-4 px-2 my-3 card" v-for="person in allpersons" :key="person.id">
        <div class="d-flex justify-space-between align-center">
          <div class="d-flex justify-space-between">
            <v-img alt="apsol" height="80" width="100" src="@/assets/photo/avatar.png"></v-img>

            <div class="personInfo align-self-center">
              <span class="name">{{person.name}}</span>
              <div class="d-flex justify-center align-center">
                <v-img width="20" height="20" src="@\assets\svg\location.svg"></v-img>
                <p>{{person.city}}</p>
              </div>
            </div>
          </div>

          <div
            class="status bg-blue-grey-darken-3 h-25 d-flex align-self-start ml-3 mt-1 rounded px-1"
          >
            <span>{{person.status}}</span>
          </div>
        </div>

        <div class="d-flex justify-start text-blue-grey-darken-2 mt-3">
          <v-icon class="text-blue-grey-darken-2" icon="mdi-calendar"></v-icon>
          <p>تاریخ اخذ شیفت :</p>
          <span class="mr-3">{{person.get_shift_date}}</span>
        </div>

        <div class="d-flex justify-start text-blue-grey-darken-2 ">
          <v-icon class="text-blue-grey-darken-2" icon="mdi-calendar"></v-icon>
          <p>تاریخ شیفت :</p>
          <span class="mr-3">{{person.shift_date}}</span>
        </div>

        <div class="d-flex justify-start text-blue-grey-darken-2 ">
          <v-icon class="text-blue-grey-darken-2" icon="mdi-clock"></v-icon>
          <p>ساعت شیفت :</p>
          <span class="mr-3">{{person.shift_hour}}</span>
        </div>
      </v-card>
    </div>
  </v-card>
</template>
<script>
import { computed } from "@vue/runtime-core";

import { useStore } from "vuex";
export default {
  name: "ListOfCards",
  data() {
    return {};
  },

  created() {
    console.log("salaaaaaaaaaaaam");
    this.$store.dispatch("user/getUsers");
  },
  setup() {
    
    let store = useStore()
    let allpersons = null;
    allpersons = computed(() => store.getters["user/theusers"]);

    return { allpersons };
  }
};
</script>
<style scoped>
.name {
  font-size: larger;
  font-weight: 700;
}
.search {
  border-radius: 20px;
}
.content {
  z-index: 10;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-top: -10px;
}
.link {
  text-decoration: none;
  color: #007aff;
  font-size: x-large;
}
p {
  font-size: larger;
  margin-right: 6px;
}
.card{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>