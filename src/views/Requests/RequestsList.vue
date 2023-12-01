<template>
  <div class="flex-center">
    <div class="noObject" v-if="noObject == '1'">
      No Requests found
    </div>
    <div class="noObject" v-else-if="noObject == '2'">
      Error With Fetch
    </div>
    <ul v-else>
      <RequestItem v-for="coach in finish" :key="coach.id" :id="coach.id" :name="coach.name" :lastName="coach.lastName"
        :price="coach.price" :tags="coach.tags" :email="coach.email" :text="coach.text" :dbId="coach.dbId"
        @deleteRequest="deleteRequest">
      </RequestItem>
    </ul>
  </div>
</template>
<script>
import RequestItem from './components/RequestItem.vue';
const url = "https://find-coach-319e4-default-rtdb.europe-west1.firebasedatabase.app/requests.json"

export default {
  components: {
    RequestItem
  },
  data() {
    return {
      tempArr: [],
      finish: [],
      noObject: '0'
    }
  },
  mounted() {
    this.getRequests()
  },
  methods: {
    getRequests() {
      fetch(url)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          if (!data) {
            this.noObject = '1'
          }
          for (const coach of Object.entries(data)) {
            coach[1].dbId = coach[0]
            this.tempArr.push(coach[1]);
          }
        })
        .then(() => {
          this.finish = this.tempArr
          this.tempArr = []
        })
        .catch((e) => {
          console.log("%c*******************************", "color:blue; background-color:orange")
          console.log(e)
          console.log("%c*******************************", "color:blue;background-color:orange")
        })
    },
    deleteRequest(dbId) {
      fetch(url.slice(0, -5) + '/' + dbId + '.json', { method: 'DELETE' }
      ).then(() => {
        this.getRequests()
      }).catch((e) => {
        this.noObject = '2'
        console.log((e))
      })
    }
  },

}
</script>
<style scoped>
.flex-center {
  justify-content: center;
  width: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgb(57, 57, 57);
  height: 220px;
  color: white;
  border-radius: 5px;
  padding: 20px;
}

.noObject {
  margin-top: 100px;
}
</style>