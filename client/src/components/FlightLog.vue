<template>
  <div class="wrapper">
    <h3>flight log</h3>
      <!-- TODO: display flights properly -->
      <p v-for="flight in $store.state.flights" :key="flight._id">{{flight}}</p>
      <!-- repeat for every flight -->
      <div class="flight" v-for="flight in $store.state.flights" :key="flight._id" >
        <div class="item" v-for="(value, key) in flight" :key="key">
          <div>
            {{key}}
            {{value}}
          </div>
        </div>
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
  border: 1px solid black;
  display: flex;
  flex-direction: column;

  .flight {
    border: 1px solid green;
    display: flex;

    .item {
      border: apx solid black;
      flex-grow: 1;
    }
  }
}
</style>
