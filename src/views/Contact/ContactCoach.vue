<template>
  <TheContactCard :id="id" :name="name" :lastName="lastName" :price="price" :tags="tags">
  </TheContactCard>
  <TheContactForm :id="id" :name="name" :lastName="lastName" :price="price" :tags="tags"></TheContactForm>
</template>
<script>
import coaches from '../../coaches.js'
import TheContactCard from './components/TheContactCard.vue'
import TheContactForm from './components/TheContactForm.vue'
export default {
  components: {
    TheContactCard,
    TheContactForm
  },
  data() {
    return {
      id: this.$route.params.id,
      name: coaches[this.$route.params.id - 1].name,
      lastName: coaches[this.$route.params.id - 1].lastName,
      price: coaches[this.$route.params.id - 1].price,
      tags: coaches[this.$route.params.id - 1].tag
    }
  },
  methods() {

  }
}
</script>
