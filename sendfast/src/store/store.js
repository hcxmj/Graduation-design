import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        user: {
            id: 1,
            name: "",
            password: "",
            img: "",
            address: "",
            num: "",
            money: ""
        },
        products:[],
        cartList:[],
        ip:"http://192.168.0.104:8888",
    },
    mutations: {
        userInfo(state, user) {
            state.user.id = user.id
            state.user.name = user.name
            state.user.password = user.password
            state.user.img = user.img
            state.user.address = user.address
            state.user.num = user.num
            state.user.money = user.money
        },
        cartInfo(state,carts){
            state.cartList=carts;
        },
        productInfo(state,products){
            state.products=products
        }
    }
})