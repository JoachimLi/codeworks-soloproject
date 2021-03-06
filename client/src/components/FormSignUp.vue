<template>
  <div class="wrapper">
    <h1>Sign up</h1>
    <form @submit.prevent="signUp" id="register" class="register-form">
      <div class="user-info-item">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="state.email" placeholder="Email">
      </div>

      <div class="user-info-item">
        <label for="firstName">First Name</label>
        <input id="firstName" type="text" v-model="state.firstName" placeholder="First Name">
      </div>

      <div class="user-info-item">
        <label for="lastName">Last Name</label>
        <input id="lastName" type="text" v-model="state.lastName" placeholder="Last Name">
      </div>

      <div class="user-info-item">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="state.password" placeholder="Password">
      </div>

      <div class="user-info-item">
        <label for="confirmPassword">Confirm Password</label>
        <input id="confirmPassword" type="password" v-model="state.confirmPassword" placeholder="Confirm Password">
      </div>

      <!-- <div>
        <button type="submit"><span>Sign Up</span></button>
      </div> -->
      <Button text="Sign Up" />
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import store from '../store'
import router from '../router'
import { registerUser } from '@/ApiService/user.ApiService.js'
import Button from './Button.vue'

export default {
  components: { Button },
  name: 'FormSignUp',

  setup () {
    const state = reactive({
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: ''
    })

    async function signUp () {
      try {
        const response = await registerUser({
          email: state.email,
          firstName: state.firstName,
          lastName: state.lastName,
          password: state.password
          // confirmPassword: state.confirmPassword       // for later use: confirm password match on backend?
        })
        // store user data in global vuex store
        store.dispatch('setUser', response.data)
        router.push({ name: 'Profile' })
        console.log('store.state.user', store.state.user)
      } catch (error) {
        // TODO: throw better error
        console.log('error', error)
      }
    }

    return {
      state,
      signUp
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 50vw;
    margin: auto;
    margin-top: 40px;
    padding: 40px;
    box-shadow: 0 0 5px gray;
    border-radius: 5px;

    h1 {
      margin: 0;
      font-weight: 700;
    }

    .register-form {
      display: flex;
      flex-direction: column;
      width: 80%;
      margin: 20px auto;

      .user-info-item {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        min-width: 70%;
        margin: auto;
        margin-bottom: 15px;

        label {
          text-align: start;
          margin: 0 0 5px 5px;
          font-weight: 500;
        }

        input {
          font-size: 1rem;
          padding: 3px;
          padding-left: 5px;
          border: none;
          border-radius: 5px;
          box-shadow: 0 0 5px gray;

          &::placeholder {
            font-family: 'Quicksand', sans-serif;
            font-weight: 300;
          }
        }
      }
    }
  }
</style>
