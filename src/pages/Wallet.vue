<template >
  <div class="allcontent">
    <v-card class="content w-100">
      <div class="card border mx-4 mt-4 mb-9 rounded-xl pb-10">
        <div class="d-flex justify-center mt-5">
          <div class="cash w-50 text-center">
            <P>موجودی کیف پول</P>
            <P>{{compute(mablagh)}} تومان</P>
          </div>

          <div class="w-50 text-center">
            <P>موجوذی بلوکه شده</P>
            <P>3333 تومان</P>
          </div>
        </div>

        <div class="d-flex justify-center mt-5">
          <div class="w-50 text-center">
            <div @click="showCard" class="d-flex justify-end">
              <v-img class="mr-15" height="30" width="30" src="@/assets/svg/plus.svg"></v-img>
            </div>
            <p class="picon mr-15">افزایش موجودی</p>
          </div>

          <div class="w-50 text-center">
            <div class="d-flex justify-start">
              <v-img height="30" width="30" class="text-blue-4 ml-15" src="@/assets/svg/cash.svg"></v-img>
            </div>
            <p class="picon ml-15">درخواست استرداد</p>
          </div>
        </div>
      </div>
    </v-card>

    <div v-if="showIncrementCard" class="d-flex justify-center">
      <div class="IncreamentCard border rounded-xl px-3 pt-3 pb-3">
        <div class="d-flex justify-space-between">
          <p>افزایش اعتبار</p>
          <v-icon @click="close" icon="text-grey-lighten-1 mdi-close"></v-icon>
        </div>

        <div class="mt-9">
          <input
            placeholder="مبلغ درخواستی خود را وارد کنید."
            v-model="amountHasIncreased"
            class="bg-grey-lighten-2 w-100 ml-3 rounded-xl py-2 pr-2"
            type="number"
          />
        </div>

        <v-btn @click="UpdateWallet" class="ml-3 text-white btn rounded-lg pr-2 mt-8" block>افزایش</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from "@vue/runtime-core";

import { useStore } from "vuex";
// import store from '../store';
export default {
  name: "WalletComp",
  data() {
    return {
      amountHasIncreased: "",
      showIncrementCard: false
    };
  },
  methods: {
    showCard() {
      this.showIncrementCard = true;
    },
    close() {
      this.showIncrementCard = false;
    },
    UpdateWallet(){
      this.$store.commit('wallet/increment',this.amountHasIncreased)
      alert('done')
      this.showIncrementCard = false;
      this.amountHasIncreased = ""
    }
  },
  setup() {
    let store = useStore()
    let mablagh = null;
    mablagh = computed(() => store.getters["wallet/theWallet"]);
      function compute(x) {
      if (!x) return "";
      var parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }

    return{mablagh,compute}
  }
};
</script>
<style scoped>
.allcontent {
  position: relative;
}
.btn {
  background-color: #23e0fd;
  font-weight: 600;
}
.IncreamentCard {
  width: 90%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: absolute;
  top: 50%;
}
.content {
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-top: -10px;
}
.card {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin: 5px;
}
.cash {
  border-left: 1px rgb(236, 234, 234) solid;
}
p {
  font-weight: 500;
}
.picon {
  font-size: small;
}
</style>