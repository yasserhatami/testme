const wallet = {
    namespaced: true,
    state: {
        WalletBalance: localStorage.getItem('cash') ? Number(localStorage.getItem('cash')):5,
        BlockedInventory: ""
    },
    getters: {
        theWallet(state) {
            return state.WalletBalance
        }
    },
    mutations: {
        increment(state, param) {
            console.log('areeeeeeeeeeeeeee', param);

            state.WalletBalance = state.WalletBalance + Number(param)
            localStorage.setItem('cash', state.WalletBalance)
        }
    }
}
export default wallet