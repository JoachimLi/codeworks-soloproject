<template>
  <form class="wrapper" @submit.prevent="addFlight">
    <div class="input-group">
      <div class="input-item">
        <label>date
          <input type="date" tabindex="1" v-model="state.flightDetails.date">
        </label>
      </div>

      <div class="input-item">
        <label>dep
          <input type="text" tabindex="1" v-model="state.flightDetails.departure" v-maska="'XXXX'">
        </label>
      </div>

      <div class="input-item">
        <label>dest
          <input type="text" tabindex="1" v-model="state.flightDetails.destination" v-maska="'XXXX'">
        </label>
      </div>

      <div class="input-item">
        <label> a/c reg
          <input type="text" maxlength="6" tabindex="1" v-model="state.flightDetails.aircraftRegistration">
        </label>
      </div>

      <div class="input-item">
        <label>off block
          <input type="text" tabindex="3" v-model="state.flightDetails.offBlock" v-maska="'##:##'" placeholder="__:__">
        </label>
      </div>

      <div class="input-item">
        <label>on block
          <input type="text" tabindex="3" v-model="state.flightDetails.onBlock" v-maska="'##:##'" placeholder="__:__">
        </label>
      </div>

      <div class="input-item">
        <label>a/c type
          <input type="text" tabindex="2" v-model="state.flightDetails.aircraftType" v-maska="'XXXX'">
        </label>
      </div>

      <div class="input-item">
        <label>takeoff
          <input type="text" tabindex="3" v-model="state.flightDetails.takeOff" v-maska="'##:##'" placeholder="__:__">
        </label>
      </div>

      <div class="input-item">
        <label>landing
          <input type="text" tabindex="3" v-model="state.flightDetails.landing" v-maska="'##:##'" placeholder="__:__">
        </label>
      </div>

    </div>

    <div class="input-group">
      <div class="input-item" v-for="(category, index) in categories" :key="index">
        <label>{{category.title}}
          <input type="text" tabindex="4" v-model="category.timeLogged" v-maska="'##:##'" placeholder="__:__">
        </label>
      </div>
    </div>
  </form>
</template>

<script>
import { computed, reactive } from 'vue'
import store from '../store'
import { flight } from '../models/flight.model'
import { setFlight } from '../ApiService/logbook.ApiService'

export default {
  props: ['toggleModal'],
  name: 'FormAddFlight',

  setup () {
    const state = reactive({
      flightDetails: { ...flight } // flight => flight model from import
    })

    const categories = computed(() => store.state.user.categoriesToTrack)

    // is being called from Logbook.vue
    async function addFlight () {
      const flight = state.flightDetails
      // input returns string, convert strings to numbers
      flight.offBlock = Number(flight.offBlock.replace(':', ''))
      flight.onBlock = Number(flight.onBlock.replace(':', ''))
      flight.takeOff = Number(flight.takeOff.replace(':', ''))
      flight.landing = Number(flight.landing.replace(':', ''))

      flight.categories = categories.value // data in computed properties need to be accessed with the value property
      flight.userId = store.state.user._id
      const newFlight = await setFlight(flight) // send new flight to api
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
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: stretch;

  .input-group {
    display: flex;
    flex-wrap: wrap;
    text-transform: uppercase;
    border-bottom: 1px solid $mainGray;
    margin-bottom: 10px;

    .input-item {
      display: flex;
      justify-content: flex-end;
      width: 31%;
      margin-bottom: 10px;

      input {
        flex-grow: 1;
        width: 70px;
        border: none;
        box-shadow: 0 0 5px gray;
        border-radius: 5px;
        line-height: 1.2rem;
        font-size: .9rem;
        text-transform: uppercase;
        text-align: center;
        font-family: 'Quicksand', sans-serif;

        &:focus {
          outline: none;
        }

        &[type="date"] {
          width: 125px;

          &::-webkit-calendar-picker-indicator{
            margin-left: 0px;
          }
        }
      }
    }
  }
}
</style>
