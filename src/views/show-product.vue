<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prix</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in getProducts" :key="product.name" @click="addToCart(product)">
            <td>{{ product.name }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.stock }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        products: [],
        cart: []
      }
    },
    computed: {
      availableProducts() {
        return this.products.filter(product => product.stock > 0)
      },

      getProducts() {
        console.log(this.$store.state.products)
        return this.$store.state.products
      }
    },
    /*created() {
      // Récupération des produits de la base de données ici
      // vous pouvez utiliser fetch ou une autre méthode pour récupérer les données
      fetch('/src/views/forms-good.vue')
        .then(response => response.json())
        .then(products => {
          this.products = products
        })
    },*/
    methods: {
      addToCart(product) {
        this.cart.push(product)
        console.log(`${product.name} a été ajouté au panier`)
      }
    }
  }
  </script>
  