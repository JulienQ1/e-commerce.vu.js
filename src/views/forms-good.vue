<template>
    <div>
      <form @submit.prevent="addProduct">
        <label for="name">Nom du produit</label>
        <input v-model="newProduct.name" type="text" id="name" required>
        
        <label for="price">Prix</label>
        <input v-model="newProduct.price" type="number" id="price" required>
  
        <label for="stock">Stock</label>
        <input v-model="newProduct.stock" type="number" id="stock" required>
        
        <button type="submit" :disabled="!isFormValid">Ajouter le produit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newProduct: {
          name: '',
          price: '',
          stock: ''
        }
      }
    },
    computed: {
      isFormValid() {
        return this.newProduct.name !== '' && this.newProduct.price !== '' && this.newProduct.stock !== ''
      }
    },
    methods: {
      addProduct() {
        // Vérification que les champs du formulaire sont remplis
        if(this.isFormValid) {
            console.log(this.newProduct)
            this.$store.commit('addProduct',this.newProduct)
          // Envoi de la requête pour ajouter le produit à la base de données
          // ici vous pouvez utiliser Fetch API ou une autre méthode pour envoyer les données à l'API
          // Réinitialisation du formulaire après l'ajout réussi
          this.newProduct = { name: '', price: '', stock: '' }
          console.log('Produit ajouté avec succès!')
        } else {
          console.log('Veuillez remplir tous les champs du formulaire')
        }
      }
    }
  }
  </script>
  
  