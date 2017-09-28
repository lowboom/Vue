import Vue from 'vue'
import Vuex from 'vuex'
import { fetchItem } from './api'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        activePage: null,
        items: {},
        item: null
    },
    actions: {
        GET_ARTICAL: (state, p) => {
            return fetchItem(p).then(data => {
                return state.commit("SET_ARTICAL", {data})
            })
        }
    },
    mutations: {
        SET_ARTICAL(state, {data}){
            state.item = data
        },
        SET_PAGE(state, {page}) {
            state.activePage = page
        }

    },
    getters: {
        activeItem (state) {
            return state.items[state.page]
        }
    }
})

export default store
