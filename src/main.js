import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

//imports for router**********
import  router  from "@/router/index";

// import axios from 'axios'
// import VueAxios from 'vue-axios'

import store from "./store/index"



loadFonts()

let app = createApp(App);
app.use(router)
  app.use(vuetify,{
    rtl : true
  });
app.use(store)

  app.mount('#app')
