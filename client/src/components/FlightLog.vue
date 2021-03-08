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
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  name: 'FlightLog',

  setup () {
    const $moment = inject('$moment') // inject $moment, as provided in main.js

    return {
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
    box-shadow: 0 0 5px rgb(207, 207, 207);
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
  }
}
</style>
