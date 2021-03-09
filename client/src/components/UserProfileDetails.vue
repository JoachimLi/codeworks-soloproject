<template>
  <div>
    <div v-if="user" class="wrapper">
      <div class="user-info-item">
        <h3>First Name:</h3>
        <h3>{{user.firstName}}</h3>
      </div>

      <div class="user-info-item">
        <h3>Last Name:</h3>
        <h3>{{user.lastName}}</h3>
      </div>

      <div class="user-info-item">
        <h3>Email:</h3>
        <h3>{{user.email}}</h3>
      </div>

      <Button text="Edit details"/>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { computed } from 'vue'
import store from '../store'
import Button from '../components/Button'

export default {
  components: { Button },
  name: 'UserProfileDetails',
  props: [
    'userDetails'
  ],

  setup () {
    const user = computed(() => store.state.user)

    return {
      user
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-bottom: 20px;
  width: 60%;
  max-width: 800px;

  .user-info-item {
    display: flex;
    justify-content: space-between;

    h3 {
      margin: 0 0 5px;
      font-weight: 500;

      &:first-child {
        width: 50%;
        text-align: end;
        padding-right: 10px;
      }

      &:nth-child(2) {
        text-align: start;
        flex-grow: 1;
      }
    }
  }

  li {
    list-style-type: none;
  }
}
</style>
