import Vue from 'vue'
import VueX from 'vuex'
Vue.use(VueX)

export default new VueX.Store({
    state: {
        nome: "Gabriel",
        dados: {}
    },
    getters: {
        getFunds(state) {
            return state.dados.funds
        },
        getStocks(state) {
            return state.dados.stocks
        }
    },
    mutations: {
        carregar(state, payload) {
            state.dados = payload
        },
        setStocks(state, payload) {
            if (payload.sell) state.dados.funds += payload.value
            else state.dados.funds -= payload.value
        },
        finalizarDia(state) {
            state.dados.stocks.map(stock => {
                let random = Math.random()
                let variation = parseInt(Math.random() * 50)
                if (random > 0.5) stock.price -= variation
                else stock.price += variation
                if (stock.price < 20) stock.price = 20
            })
        },
        restart(state) {
            state.dados.stocks.map(stock => {
                stock.price = parseInt(Math.random() * 200)
                if (stock.price < 20) stock.price = 20
                stock.quantity = 0
            })
            state.dados.funds = 10000
        }
    },
    actions: {

    }
})