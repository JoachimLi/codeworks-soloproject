<template>
  <div class="navbar__wrapper">
    <div class="navbar__img"></div>

    <nav class="navigation authenticated" v-if="$store.state.user">
      <div class="link-wrapper">
        <router-link class="nav__link" :to="{ name: 'Logbook' }">Logbook</router-link>
        <router-link class="nav__link" :to="{ name: 'Profile' }">Profile</router-link>
      </div>
      <a class="logout" @click="logout">Logout</a>
    </nav>

    <nav class="navigation no-auth" v-else>
      <div class="link-wrapper">
        <router-link class="nav__link" :to="{ name: 'Home' }">Home</router-link>
        <router-link class="nav__link" :to="{ name: 'Register' }">Register</router-link>
        <router-link class="nav__link" :to="{ name: 'Login' }">Login</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import store from '../store'
import router from '../router'

export default {
  name: 'NavBar',

  setup () {
    function logout () {
      store.dispatch('removeUser')
      router.push({ name: 'Login' })
    }

    return {
      logout
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  .navbar__img {
    width: 100%;
    height: 75px;
    background-image: url('../assets/img/logbook.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 15%;
  }

  .navigation {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    width: 100%;
    background-color: black;
    height: 2rem;
    border-top: 5px solid black;

    .link-wrapper {
      display: flex;
      justify-content: center;
      height: 100%;
      flex-grow: 19;
    }

    .nav__link, &:visited {
      height: 100%;
      vertical-align: center;
      text-decoration: none;
      color: white;
      padding: 5px 10px 0;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      font-size: 1.1rem;
      font-weight: 700;

      &.router-link-exact-active {
        background-color: white;
        color: black;
      }
    }

    .logout {
      color: white;
      font-size: 1rem;
      padding-top: 3px;
      cursor: pointer;
      flex-grow: 1;
    }
  }
}
</style>
