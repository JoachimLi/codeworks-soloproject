<template>
  <div class="navbar__wrapper">
    <div class="navbar__img"></div>
    <nav class="navigation">
      <router-link class="nav__link" :to="{ name: 'Register' }">Register</router-link>
      <router-link class="nav__link" :to="{ name: 'Login' }">Login</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss" scoped>
.navbar__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  .navbar__img {
    width: 100vw;
    height: 75px;
    background-image: url('../assets/img/logbook.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: 15%;
  }

  .navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    background-color: #000;
    height: 2rem;
    border-top: 5px solid #000;

    .nav__link, &:visited {
      height: 100%;
      vertical-align: center;
      text-decoration: none;
      color: white;
      padding: 0 10px;
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      font-family:Arial, Helvetica, sans-serif;
      font-weight: bold;

      &.router-link-exact-active {
        background-color: #fff;
        color: #000;
      }
    }
  }
}
</style>
