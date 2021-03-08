<template>
<div>
  <h1>logbook</h1>
  <flight-log v-if="$store.state.flights"/>
  <h3 v-else>Loading...</h3>
  <Modal v-if="state.addFlight" @toggleModal="toggleModal" text="add flight">
    <form-add-flight/>
  </Modal>
  <Button @click="toggleModal" text="add flight"/>
</div>
</template>

<script>
import { onMounted, reactive } from 'vue'
import { getFlights } from '../ApiService/logbook.ApiService'
import store from '../store'
import FlightLog from '../components/FlightLog.vue'
import FormAddFlight from '../components/FormAddFlight.vue'
import Button from '../components/Button.vue'
import Modal from '../components/Modal.vue'

export default {
  components: { FlightLog, FormAddFlight, Button, Modal },
  name: 'Logbook',

  setup () {
    const state = reactive({
      addFlight: false // determines whether form-add-flight element is visible
    })

    function toggleModal () {
      state.addFlight = !state.addFlight
    }

    async function fetchFlights (userId) {
      const id = { userId }
      try {
        const flights = await getFlights(id) // get all the detailed flight objects for a user
        await store.dispatch('setFlights', flights.data) // and store them in the vuex store
      } catch (error) {
        console.log('error', error)
      }
    }
    onMounted(fetchFlights(store.state.user._id)) // get all flights from db on component mount

    return {
      state,
      toggleModal
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
