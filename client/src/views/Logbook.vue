<template>
<div>
  <h1>logbook</h1>
  <flight-log v-if="$store.state.flights"/>
  <h3 v-else>Loading...</h3>
</div>
</template>

<script>
import { onMounted } from 'vue'
// import { getFlights } from '../ApiService/'
import store from '../store'
import FlightLog from '../components/FlightLog.vue'

export default {
  components: { FlightLog },
  name: 'Logbook',

  setup () {
  //   const state = reactive({
  //   })

    async function fetchFlights (userId) {
      const id = { _id: userId }
      try {
        console.log('id', id)
        // await getFlights(userId)
        // console.log('store.state.user', store.state.user)
      } catch (error) {
        console.log('error', error)
      }
    }
    onMounted(fetchFlights(store.state.user._id))

    // return {
    //   state,
    //   getUserInfo
    // }
  }
}
</script>

<style lang="scss" scoped>
</style>
