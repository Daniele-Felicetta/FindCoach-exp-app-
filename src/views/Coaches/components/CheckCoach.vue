<template>
  <div class="allCheck">
    <form>
      <section>
        <label for="">All</label>
        <input type="checkbox" v-model="checks.checkAll">
      </section>
      <section>
        <label for="">FrontEnd</label>
        <input type="checkbox" :disabled="checks.checkAll" v-model="checks.checkFrontEnd">
      </section>
      <section>
        <label for="">BackEnd</label>
        <input type="checkbox" :disabled="checks.checkAll" v-model="checks.checkBackend">
      </section>
      <section>
        <label for="">Career</label>
        <input type="checkbox" :disabled="checks.checkAll" v-model="checks.checkCareer">
      </section>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checks: {
        checkFrontEnd: false,
        checkBackend: false,
        checkCareer: false,
        checkAll: true
      }
    }
  },
  watch: {
    checks: {
      handler() {
        if (this.checks.checkAll) {
          this.checks.checkCareer = false
          this.checks.checkFrontEnd = false
          this.checks.checkBackend = false
        }
        this.$emit('checkCommit', this.checks)
      },
      deep: true,
      immediate: true
    }
  },
  methods: {

  }
}
</script>
<style scoped>
label {
  margin-right: 10px;
}

form {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  width: clamp(300px, 40vw, 45vw);
  height: 80px;
  background-color: rgba(91, 91, 170, 0.649);
  border-radius: 10px;
  padding: 10px
}

</style>