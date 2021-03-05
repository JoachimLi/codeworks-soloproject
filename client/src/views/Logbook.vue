<template>
<div>
  <h1>logbook</h1>
  <flight-log v-if="$store.state.flights"/>
  <h3 v-else>Loading...</h3>
  <form-add-flight v-if="state.addFlight" @toggleModal="toggleModal"/>
  <button @click="toggleModal">Add flight</button>
</div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import { getFlights } from '../ApiService/logbook.ApiService'
import store from '../store'
import FlightLog from '../components/FlightLog.vue'
import FormAddFlight from '../components/FormAddFlight.vue'

export default {
  components: { FlightLog, FormAddFlight },
  name: 'Logbook',

  setup () {
    const state = reactive({
      addFlight: false
    })

    function toggleModal () {
      state.addFlight = !state.addFlight
      console.log('addFlight', state.addFlight)
    }

    async function fetchFlights (userId) {
      const id = { userId }
      try {
        const flights = await getFlights(id)
        store.dispatch('setFlights', flights.data)
      } catch (error) {
        console.log('error', error)
      }
    }
    onMounted(fetchFlights(store.state.user._id))

    return {
      state,
      toggleModal
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
