<template>
  <div>
    <div v-if="user" class="wrapper">
      <div class="user-info-item">
        <h3>First Name:</h3>
        <h3>{{user.firstName}}</h3>
        <button></button>
      </div>

      <div class="user-info-item">
        <h3>Last Name:</h3>
        <h3>{{user.lastName}}</h3>
        <button></button>
      </div>

      <div class="user-info-item">
        <h3>Email:</h3>
        <h3>{{user.email}}</h3>
        <button></button>
      </div>
        <h3>Categories Tracked</h3>
      <ul>
        <li v-for="(category, index) in user.categoriesToTrack" :key="index">{{category.title}}</li>
      </ul>
      <form @submit.prevent="addCategories">
        <label for="addCategories">Add Categories (komma separated)</label>
        <input type="text" v-model="state.categoriesToAdd">
        <button type="submit">Add</button>
      </form>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import store from '../store'
import { updateUser } from '../ApiService/user.ApiService'

export default {
  name: 'UserProfileDetails',
  props: [
    'userDetails'
  ],

  setup () {
    const state = reactive({
      categoriesToAdd: ''
    })

    const user = computed(() => store.state.user)

    // add new time categories to track to the user
    async function addCategories () {
      const newCategories = state.categoriesToAdd.split(',')
      const newCategoriesArr = [...user.value.categoriesToTrack]
      newCategories.forEach(element => {
        newCategoriesArr.push({ title: element, timeLogged: '' })
      })
      await store.dispatch('addCategories', newCategoriesArr)
      updateUser({ _id: user.value._id, categoriesToTrack: store.state.user.categoriesToTrack }) // update user object in db with new categories
      state.categoriesToAdd = ''
    }

    return {
      state,
      user,
      addCategories
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 60%;
  max-width: 800px;

  .user-info-item {
    display: flex;
    justify-content: space-between;

    h3 {
      margin: 0 0 5px;
      font-weight: 500;

      &:first-child {
        width: 50%;
        text-align: end;
        padding-right: 10px;
      }

      &:nth-child(2) {
        text-align: start;
        flex-grow: 1;
      }
    }

    button {
      border: none;
      background-color: white;
      background-image: url(../assets/outline_edit_black_24dp.png);
      background-size: cover;
      width: 25px;
      height: 25px;
      cursor: pointer;

      &:focus {
        outline: none;
      }
    }
  }

  li {
    list-style-type: none;
  }
}
</style>
