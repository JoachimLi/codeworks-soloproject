<template>
  <div>
    <h1>Sign up</h1>
    <form @submit.prevent="logIn" id="login" class="login__form">
      <label for="email">Email</label>
      <input id="email" type="email" v-model="state.email" placeholder="email">

      <label for="password">Password</label>
      <input id="password" type="text" v-model="state.password" placeholder="Password">

      <button type="submit">Log In</button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import store from '../store'
import router from '../router'
import { authenticateUser } from '@/ApiService/user.ApiService.js'

export default {
  name: 'FormLogIn',

  // use Vue3 Composition API
  setup () {
    // component data store
    const state = reactive({
      email: '',
      password: ''
    })

    async function logIn () {
      try {
        const response = await authenticateUser({
          email: state.email,
          password: state.password
        })
        // store user data in global vuex store
        store.dispatch('setUser', response.data)
        // TODO: forward to profile page
        router.push({ name: 'Logbook' })
      } catch (error) {
        // TODO: throw better error
        console.log('error', error)
      }
    }

    return {
      state,
      logIn
    }
  }
}
</script>

<style lang="scss" scoped>
// TODO: improve styling
  .login__form {
    display: flex;
    flex-direction: column;

  }
</style>
