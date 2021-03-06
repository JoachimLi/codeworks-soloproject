<template>
  <div class="wrapper">
    <h1>Log in</h1>
    <form @submit.prevent="logIn" id="login" class="login-form">
      <div class="user-info-item">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="state.email" placeholder="Email">
      </div>

      <div class="user-info-item">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="state.password" placeholder="Password">
      </div>
      <Button text="Log In"/>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import store from '../store'
import router from '../router'
import { authenticateUser } from '@/ApiService/user.ApiService.js'
import Button from './Button.vue'

export default {
  components: { Button },
  name: 'FormLogIn',

  setup () {
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
    }

    .login-form {
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
