<template>
  <div class="wrapper">
    <h3>flight log</h3>
    <div class="flight" v-for="flight in $store.state.flights" :key="flight._id">
      <div class="container">
        <div class="heading">date</div>
        <div class="year">{{$moment(flight.date).format('YYYY')}}</div>
        <div class="day">{{$moment(flight.date).format('DD MMM')}}</div>
      </div>
      <div class="container">
        <div class="heading">aircraft</div>
        <div class="registration">{{flight.aircraftRegistration}}</div>
        <div class="type">{{flight.aircraftType}}</div>
      </div>
      <div class="container">
        <div class="heading">route</div>
        <div class="dep">{{flight.departure}}</div>
        <div class="dest">{{flight.destination}}</div>
        <div class="total">total:</div>
      </div>
      <div class="container">
        <div class="heading">block</div>
        <div class="date">{{flight.offBlock}}</div>
        <div class="date">{{flight.onBlock}}</div>
        <div class="total">{{flight.categories[0].timeLogged}}</div>
      </div>
      <div class="container">
        <div class="heading">flight</div>
        <div class="date">{{flight.takeOff}}</div>
        <div class="date">{{flight.landing}}</div>
        <div class="total"></div>
      </div>
      <div class="details" @click="toggleDetails">
        <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 0 24 24" width="34px" fill="#cfcfcf">
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z"/>
        </svg>
      </div>
    </div>
    <Modal v-if="state.showDetails" @toggleModal="toggleDetails" text="flight details"/>
  </div>
</template>

<script>
import { inject, reactive } from 'vue'
import Modal from './Modal.vue'
export default {
  components: { Modal },
  name: 'FlightLog',

  setup () {
    const state = reactive({
      showDetails: false // show details modal
    })

    function toggleDetails () {
      state.showDetails = !state.showDetails
    }

    const $moment = inject('$moment') // inject $moment, as provided in main.js

    return {
      state,
      toggleDetails,
      $moment
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;
  text-transform: uppercase;

  .flight {
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    box-shadow: 0 0 5px #cfcfcf;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;

    .container {
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      .heading {
        text-transform: capitalize;
        margin-bottom: 5px;
        border-bottom: 1px solid rgb(207, 207, 207);
      }

      .total {
        text-transform: capitalize;
        margin-top: 5px;
        border-top: 1px solid rgb(207, 207, 207);
      }
    }
    .details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      cursor: pointer;
    }
  }
}
</style>
