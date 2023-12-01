<template lang="">
  <div class='requestItem'>
    <div class="contain">
      <div class="baseData">
        <h2>{{name+' '+lastName}}</h2>
        <h3>{{`$ ${price} /hour`}}</h3>
          <ul>
            <li v-for="tag in tags" :key="id+tag"><p :class="[tag]">{{tag}}</p></li>
          </ul>
      </div>
      <div class="messageData">
        <div class="messageContain">
          <h2>Email</h2>
          <p>{{email}}</p>
        </div>
        <div class="messageContain">
          <h2>Text</h2>
          <p>{{text}}</p>
        </div>
      </div>
      <p style="font-size:10px;marginTop:10px">{{dbId}}</p>
    </div>
  <button @click="deleteRequest">Delete</button>
  </div>
</template>
<script>
export default {
  props: ['id', 'name', 'lastName', 'price', 'tags', 'email', 'text','dbId'],
  data() {
    return {

    }
  },
  methods: {
    deleteRequest() {
      this.$emit('deleteRequest',this.dbId)
    }
  }
}
</script>
<style scoped>
.messageContain {
  padding: 10px;
}

.requestItem {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

ul {
  display: flex;
  justify-content: start;
  list-style-type: none;
  text-align: start;
}

.messageData p {
  color: #CCDDFF;
}

.messageData {
  background-color: rgb(121, 121, 106);
  border-radius: 10px;
  padding: 20px;
  margin-top: 15px;
}

.baseData {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.baseData ul p {
  margin: 10px;
  border-radius: 5px;
  padding: 5px;
  text-transform: capitalize;
}

.contain {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: rgb(74, 74, 74);
  border-radius: 15px;
  padding: 20px;
  margin: 30px;
  flex-wrap: wrap;
  width: clamp(300px, 40vw, 50vw);
}

h2 {
  color: white;
}

h3 {
  color: rgb(255, 224, 184);
}


button{

}
</style>