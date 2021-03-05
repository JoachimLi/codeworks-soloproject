<template>
  <div class="modal-wrapper">
    <div class="modal">
      <div class="header">
        <h4>add flight</h4>
        <a @click="$emit('toggleModal')">X</a>    <!-- emit event to parent -->
      </div>
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
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import store from '../store'
import { flight } from '../models/flight.model'
import { setFlight } from '../ApiService/logbook.ApiService'

export default {
  name: 'FormAddFlight',
  emits: 'toggleModal',

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
.modal-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(31, 31, 31, 0.5);

  .modal {
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 50vh;
    background-color: white;
    border-radius: 5px;

    .header {
      display: flex;
      justify-content: flex-end;

      h4 {
        flex-grow: 5;
      }

      a {
        margin: 20px;
        cursor: pointer;
      }
    }

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
  }
}
</style>
