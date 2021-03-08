<template>
  <form @submit.prevent="addFlight">
    <div class="input-item" v-for="(value, key) in state.flightDetails" :key="key">
      <label>{{key}}
        <input type="text" v-model="state.flightDetails[key]">
      </label>
    </div>
    <div class="input-item" v-for="(category, index) in categories" :key="index">
      <label>{{category.title}}
        <input type="time" v-model="category.timeLogged">
      </label>
    </div>
    <button type="Submit">Log</button>
  </form>
</template>

<script>
import { computed, reactive } from 'vue'
import store from '../store'
import { flight } from '../models/flight.model'
import { setFlight } from '../ApiService/logbook.ApiService'

export default {
  name: 'FormAddFlight',

  setup (_, { emit }) {
    const state = reactive({
      flightDetails: { ...flight } // flight => flight model from import
    })

    const categories = computed(() => store.state.user.categoriesToTrack)

    async function addFlight () {
      const flight = state.flightDetails
      flight.categories = categories.value // data in computed properties need to be accessed with the value property
      flight.userId = store.state.user._id
      const newFlight = await setFlight(flight) // send new flight to api
      emit('toggleModal') // close modal
      await store.dispatch('setFlights', [newFlight.data]) // add new flight to vuex store
    }

    return {
      state,
      categories,
      addFlight
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 20px;

  .input-item {
    width: 30%;

    input {
      width: 50%
    }
  }
}
</style>
