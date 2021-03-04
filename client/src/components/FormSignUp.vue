<template>
  <div>
    <h1>Sign up</h1>
    <form @submit.prevent="registerUser" id="register" class="register__form">
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

    function registerUser () {
      console.log('email', state.email)
    }

    return {
      state,
      registerUser
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
