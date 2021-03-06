<template>
  <div class="wrapper">
    <h3>flight log</h3>
    <div class="flight" v-for="flight in $store.state.flights" :key="flight._id">
      <div class="date">{{flight.date}}</div>
      <div class="date">{{flight.aircraftRegistration}}</div>
      <div class="date">{{flight.departure}}</div>
      <div class="date">{{flight.destination}}</div>
      <div class="date">{{flight.offBlock}}</div>
      <div class="date">{{flight.takeOff}}</div>
      <div class="date">{{flight.landing}}</div>
      <div class="date">{{flight.onBlock}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlightLog'
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: auto;

  .flight {
    border: 1px solid black;
    display: flex;
  }
}
</style>
