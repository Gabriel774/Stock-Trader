import axios from 'axios'
import Vue from 'vue'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: "http://192.168.1.2:3000/data"
        })
    }
})