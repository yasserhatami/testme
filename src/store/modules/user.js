import axios from "axios";

const user = {
    namespaced: true,
    state: {
        users: ""

    },
    getters: {
        theusers(state) {
            return state.user
        }
    },
    mutations: {
        updateUser(state, response) {
            state.user = response
            console.log('stste', response);
        }
    },
    actions: {
        async getUsers(context) {
            const response = await axios.get("https://63d3de42c1ba499e54cad952.mockapi.io/api/v1/shifts/list")
                .then((response) => {
                    console.log(response.data);
                    let persons = response.data
                    context.commit('updateUser', persons)
                }).catch(()=>{
                    console.log('error');
                })

            console.log(response);

        }
    }
}
export default user