<template>
  <div>
    <div v-if="user">
      <h2>{{`${user.firstName} ${user.lastName}`}}</h2>
      <h4>{{user.email}}</h4>
      <h4>Categories Tracked</h4>
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

    async function addCategories () {
      const newCategories = state.categoriesToAdd.split(',')
      const newCategoriesArr = [...user.value.categoriesToTrack]
      newCategories.forEach(element => {
        newCategoriesArr.push({ title: element, timeLogged: '' })
      })
      await store.dispatch('addCategories', newCategoriesArr)
      updateUser({ _id: user.value._id, categoriesToTrack: store.state.user.categoriesToTrack })
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
li {
  list-style-type: none;
}
</style>
