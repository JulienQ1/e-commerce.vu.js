import { createStore } from 'vuex'

export default createStore({

  state: {
    products: [],
    cart: []
  },
  mutations: {
    addProduct(state, product) {
      state.products.push(product)
      console.log(state.products)
    },
    addToCart(state, product) {
      state.cart.push(product)
    }
  },
  actions: {
    addProduct({ commit }, product) {
      // Envoi de la requête pour ajouter le produit à la base de données
      // ici vous pouvez utiliser Fetch API ou une autre méthode pour envoyer les données à l'API
      commit('addProduct', product)
    },
    addToCart({ commit }, product) {
      commit('addToCart', product)
    }
  },
  getters: {
    availableProducts: state => {
      return state.products.filter(product => product.stock > 0)
    }
  }


})