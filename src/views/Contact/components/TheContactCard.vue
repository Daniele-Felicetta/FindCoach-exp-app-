<template>
  <div class="flex-center">
    <div class="container">
      <h1>{{ name + ' ' + lastName }}</h1>
      <h3>{{ `$ ${price} /hour` }}</h3>
      <ul>
        <li v-for="tg in tags" :key="id + tg">
          <p :class="[tg]">{{ tg }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ['id', 'name', 'lastName', 'price', 'tags'],
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgb(57, 57, 57);
  height: 220px;
  width: 400px;
  color: white;
  border-radius: 5px;
  padding: 20px;
  margin-top: 20px;
}

ul {
  display: flex;
  justify-content: start;
  list-style-type: none;
  text-align: start;
}

p {
  margin: 10px;
  border-radius: 5px;
  padding: 5px;
  text-transform: capitalize;
}

h4 {
  color: rgb(255, 224, 184);
}
</style>