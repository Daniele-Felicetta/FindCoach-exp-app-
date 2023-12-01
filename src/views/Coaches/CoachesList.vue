<template>
  <div class="flex-center flex-vertical">
    <CheckCoach @checkCommit="checkCommit"></CheckCoach>
    <ul>
      <CoachItem v-for="coach in coachSelect" :key="coach.id" :id="coach.id" :name="coach.name + ' ' + coach.lastName"
        :price="coach.price" :tag="coach.tag">
      </CoachItem>
    </ul>
  </div>
  <!-- <h2>{{checkCommits}}</h2> -->
</template>
<script>
import coaches from '../../coaches.js';
import CheckCoach from './components/CheckCoach.vue';
import CoachItem from './components/CoachItem.vue';
export default {
  data() {
    return {
      checks: [],
      checkAll: false
    }
  },
  computed: {
    coachSelect() {
      const filterCoaches = coaches.filter(coach =>
        this.checks.every(check => coach.tag.includes(check))
      )
      if (this.checks.length > 0 || this.checkAll) {
        return filterCoaches
      }
      else {
        return []
      }
    },

  },
  methods: {
    checkCommit(checks) {
      const checksArr = []
      this.checkAll = checks.checkAll
      if (!checks.checkAll) {
        if (checks.checkFrontEnd) {
          checksArr.push("frontend")
        }
        if (checks.checkBackend) {
          checksArr.push("backend")
        }
        if (checks.checkCareer) {
          checksArr.push("career")
        }
      }
      this.checks = checksArr
    },
  },
  components: {
    CheckCoach,
    CoachItem
  }
}
</script>
<style scoped>
div {
  margin-top: 10px;
}

ul {
  width: clamp(300px, 50vw, 50vw);
  margin: 20px 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}
</style>