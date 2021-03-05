<template>
  <div>
    <h3>flight log</h3>
    <p v-for="flight in $store.state.flights" :key="flight._id">{{flight}}</p>
  </div>
</template>

<script>
export default {
  name: 'FlightLog'
}
</script>

<style lang="scss" scoped>
</style>
