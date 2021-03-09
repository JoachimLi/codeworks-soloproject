<template>
  <div class="wrapper">
    <h3>flight log</h3>
    <div class="flight" v-for="flight in $store.state.flights" :key="flight._id">
      <div class="flex">
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
          <div class="total">{{flight.blockTime}}</div>
        </div>

        <div class="container">
          <div class="heading">flight</div>
          <div class="date">{{flight.takeOff}}</div>
          <div class="date">{{flight.landing}}</div>
          <div class="total">{{flight.flightTime}}</div>
        </div>
      </div>

      <div class="details">
        <div class="button" @click="toggleDetails(flight)">
          <svg :class="{active: state.showDetails === flight._id}" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#cfcfcf">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </div>

        <div class="categories" v-if="state.showDetails === flight._id">
          <div v-for="category in flight.categories" :key="category.title">
            {{category.title}}: {{category.timeLogged}}
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { inject, reactive } from 'vue'
export default {
  name: 'FlightLog',

  setup () {
    const state = reactive({
      showDetails: false
    })

    function toggleDetails (flight) {
      state.showDetails === flight._id ? state.showDetails = false : state.showDetails = flight._id
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
    flex-direction: column;
    justify-content: space-around;
    align-items: stretch;
    box-shadow: 0 0 5px $mainGray;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;

    .flex {
      display: flex;
    }

    .container {
      display: flex;
      flex-direction: column;
      flex-grow: 1;

      .heading {
        text-transform: capitalize;
        margin-bottom: 5px;
        border-bottom: 1px solid $mainGray;
      }

      .total {
        text-transform: capitalize;
        margin-top: 5px;
        border-top: 1px solid $mainGray;
      }
    }

    .details {
      display: flex;
      flex-direction: column;
      align-items: stretch;

      .button {
        cursor: pointer;

        svg {
          margin: -5px;
          transition: transform 0.2s;

          &.active {
            transform: rotate(-180deg);
          }
        }
      }

      .categories {
        display: flex;
        flex-wrap: wrap;

        div {
          width: 20%;
        }
      }
    }
  }
}
</style>
