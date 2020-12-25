import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    strict: true,

    state() {
        return {
            products: [
                { name: 'Banana Skin', price: 20, id: 1 },
                { name: 'Shiny Star', price: 40, id: 2 },
                { name: 'Green Shells', price: 60, id: 3 },
                { name: 'Red Shells', price: 8, id: 4 },
            ],
        };
    },

    getters: {
        saleProducts(state) {
            const saleProducts = state.products;
            return saleProducts.map((product) => {
                return {
                    name: `**${product.name}**`,
                    price: product.price / 2,
                };
            });
        },
    },

    mutations: {
        reducePrice(state) {
            state.products.forEach((product) => {
                product.price -= 1;
            });
        }
    }
});
