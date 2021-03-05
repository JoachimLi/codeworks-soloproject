<template>
  <h3>flight log</h3>
</template>

<script>
// import { reactive, onMounted } from 'vue'
// import store from '../store'
// import { getUserDetails } from '../ApiService/user.ApiService'
// import UserProfileDetails from '../components/UserProfileDetails.vue'

export default {
  name: 'FlightLog'

  // setup () {
  //   const state = reactive({
  //     user: null
  //   })

  //   async function getUserInfo (userId) {
  //     const id = { userId }
  //     try {
  //       const details = await getUserDetails(id)
  //       store.state.user = { ...store.state.user, ...details.data }
  //     } catch (error) {
  //       console.log('error', error)
  //     }
  //   }

  //   onMounted(getUserInfo(store.state.user._id))

  //   return {
  //     state,
  //     getUserInfo
  //   }
  // }
}
</script>

<style lang="scss" scoped>
</style>
