<template>
  <div class="contactForm">
    <div class="container">
      <h1>Text to {{ name }}, now!</h1>
      <form @submit.prevent="sendMessage">
        <label for="">Your Email</label>
        <input value="a@wd.it" ref="email" type="email">
        <label for="">Message</label>
        <textarea value="CIAO CIAO" ref="text" type="textarea" rows="10" cols="20"> </textarea>
        <button>Send</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  props: ['id', 'name', 'lastName', 'price', 'tags'],
  methods: {
    sendMessage() {
      try {
        fetch("https://find-coach-319e4-default-rtdb.europe-west1.firebasedatabase.app/requests.json", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            coachId: this.id,
            name: this.name,
            lastName: this.lastName,
            price: this.price,
            tags: this.tags,
            email: this.$refs.email.value,
            text: this.$refs.text.value,
          }),
        })
      } catch (e) {
        console.log(e)
      }
      this.$router.push('/coaches')
    }
  }
}
</script>
<style scoped>
.contactForm {
  display: flex;
  justify-content: center;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgb(6, 87, 127);
  height: 400px;
  margin-top: 20px;
  color: rgb(255, 255, 255);
  width: clamp(200px, 35%, 35%);
  border-radius: 5px;
  padding: 20px;
}

form {
  display: flex;
  justify-content: space-between;
  align-items: start;
  flex-direction: column;
  height: 290px;
}

input {
  width: 100%;
  border-radius: 5px;
  padding: 5px 2px;
}

textarea {
  width: 100%;
  border-radius: 5px;
  resize: none;
  padding: 5px 2px;
}

button:hover {
  border: 1px solid rgba(255, 0, 187, 0.623);
  box-shadow: 0px 0px 10px 2px rgba(255, 0, 187, 0.623);
}

button {
  border: 1px solid rgba(255, 0, 187, 0.623);
  align-self: flex-end;
}
</style>