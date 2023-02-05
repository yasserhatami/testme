import { createStore } from 'vuex';

import user from './modules/user.js'
import wallet from './modules/wallet.js';


const store = createStore({
    modules: {
        user,
        wallet
    }
  })
  export default store;