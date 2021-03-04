<template>
  <div>
    <h1>Sign up</h1>
    <form @submit.prevent="signUp" id="register" class="register__form">
      <label for="email">Email</label>
      <input id="email" type="email" v-model="state.email" placeholder="email">

      <label for="firstName">First Name</label>
      <input id="firstName" type="text" v-model="state.firstName" placeholder="first name">

      <label for="lastName">Last Name</label>
      <input id="lastName" type="text" v-model="state.lastName" placeholder="last name">

      <label for="password">Password</label>
      <input id="password" type="text" v-model="state.password" placeholder="Password">

      <label for="confirmPassword">Confirm Password</label>
      <input id="confirmPassword" type="text" v-model="state.confirmPassword" placeholder="Confirm Password">

      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { registerUser } from '@/ApiService/user.ApiService.js'

export default {
  name: 'FormSignUp',

  // use Vue3 Composition API
  setup () {
    // component data store
    const state = reactive({
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: ''
    })

    function signUp () {
      const response = registerUser({
        email: state.email,
        firstName: state.firstName,
        lastName: state.lastName,
        password: state.password
        // confirmPassword: state.confirmPassword
      })
      console.log('response', response)
    }

    return {
      state,
      signUp
    }
  }
}
</script>

<style lang="scss" scoped>
  .register__form {
    display: flex;
    flex-direction: column;

  }
</style>
