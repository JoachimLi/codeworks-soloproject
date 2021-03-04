<template>
  <h1>Profile</h1>
</template>

<script>
import { reactive, onMounted } from 'vue'
import store from '../store'
import { getUserDetails } from '../ApiService/user.ApiService'

export default {
  name: 'Profile',

  setup () {
    const state = reactive({
      user: null
    })

    async function getUserInfo (userId) {
      const id = { userId }
      try {
        const details = await getUserDetails(id)
        state.user = details.data
        console.log('state.user', state.user)
      } catch (error) {
        console.log('error', error)
      }
    }

    onMounted(getUserInfo(store.state.user._id))

    return {
      getUserInfo
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
