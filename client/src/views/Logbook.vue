<template>
  <div class="wrapper">

    <h1>logbook</h1>

    <flight-log v-if="sortedFlights" :sortedFlights="sortedFlights"/>

    <h3 v-else>Loading...</h3>

    <Modal v-if="state.addFlight" @toggleModal="toggleModal" text="add flight">
      <form-add-flight ref="newFlightData" />
      <Button tabindex="5" @click="saveNewFlight" text="log"/>
    </Modal>

    <Button @click="toggleModal" text="add flight"/>

  </div>
</template>

<script>
import { computed, onMounted, reactive, ref } from 'vue'
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

    const sortedFlights = computed(() => {
      const flights = store.state.flights
      if (flights) {
        flights.sort((a, b) => {
          if (a.date < b.date) return 1
          if (a.date > b.date) return -1
          if (a.date === b.date) {
            if (a.offBlock < b.offBlock) return 1
            if (a.offBlock > b.offBlock) return -1
          }
          return 0
        })
      }
      return flights
    })

    function toggleModal () {
      state.addFlight = !state.addFlight
    }

    // refers to the ref prop on the form-add-flight component on line 7
    const newFlightData = ref(null) // null as default value

    function saveNewFlight () {
      newFlightData.value.addFlight()
      toggleModal()
    }

    async function fetchFlights (userId) {
      const id = { userId }
      try {
        const flights = await getFlights(id) // get all the detailed flight objects for a user
        await store.dispatch('resetFlights')
        await store.dispatch('setFlights', flights.data) // and store them in the vuex store
      } catch (error) {
        throw new Error(error)
      }
    }
    onMounted(fetchFlights(store.state.user._id)) // get all flights from db on component mount

    return {
      state,
      sortedFlights,
      newFlightData,
      toggleModal,
      saveNewFlight
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-transform: capitalize;
}
</style>
