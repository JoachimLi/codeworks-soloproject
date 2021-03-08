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
          <input type="text" maxlength="4" tabindex="1" v-model="state.flightDetails.departure">
        </label>
      </div>

      <div class="input-item">
        <label>dest
          <input type="text" maxlength="4" tabindex="1" v-model="state.flightDetails.destination">
        </label>
      </div>

      <div class="input-item">
        <label> a/c reg
          <input type="text" tabindex="1" v-model="state.flightDetails.aircraftRegistration">
        </label>
      </div>

      <div class="input-item">
        <label>off block
          <input type="time" tabindex="3" v-model="state.flightDetails.offBlock">
        </label>
      </div>

      <div class="input-item">
        <label>on block
          <input type="time" tabindex="3" v-model="state.flightDetails.onBlock">
        </label>
      </div>

      <div class="input-item">
        <label>a/c type
          <input type="text" maxlength="4" tabindex="2" v-model="state.flightDetails.aircraftType">
        </label>
      </div>

      <div class="input-item">
        <label>takeoff
          <input type="time" tabindex="3" v-model="state.flightDetails.takeOff">
        </label>
      </div>

      <div class="input-item">
        <label>landing
          <input type="time" tabindex="3" v-model="state.flightDetails.landing">
        </label>
      </div>

    </div>

    <div class="input-group">
      <div class="input-item" v-for="(category, index) in categories" :key="index">
        <label>{{category.title}}
          <input type="time" tabindex="4" v-model="category.timeLogged">
        </label>
      </div>
    </div>
    <Button text="Log" tabindex="5"/>
  </form>
</template>

<script>
import { computed, reactive } from 'vue'
import store from '../store'
import { flight } from '../models/flight.model'
import { setFlight } from '../ApiService/logbook.ApiService'
import Button from './Button.vue'

export default {
  components: { Button },
  props: ['toggleModal'],
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

        &[type="time"]::-webkit-calendar-picker-indicator {
          display: none;
        }

        &.time {
          text-align: right;
        }
      }
    }
  }
}
</style>
