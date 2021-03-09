<template>
  <div>
    <h1>Details</h1>
    <user-profile-details :userDetails="state.user"/>
    <setup-categories/>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue'
import store from '../store'
import { getUserDetails } from '../ApiService/user.ApiService'
import UserProfileDetails from '../components/UserProfileDetails.vue'
import SetupCategories from '../components/SetupCategories.vue'

export default {
  components: { UserProfileDetails, SetupCategories },
  name: 'Profile',

  setup () {
    const state = reactive({
      user: null
    })

    async function getUserInfo (userId) {
      const id = { userId }
      try {
        const details = await getUserDetails(id) // get user details from server
        store.state.user = { ...store.state.user, ...details.data }
      } catch (error) {
        throw new Error(error)
      }
    }

    onMounted(getUserInfo(store.state.user._id))

    return {
      state,
      getUserInfo
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>
