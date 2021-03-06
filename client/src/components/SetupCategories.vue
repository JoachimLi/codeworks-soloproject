<template>
  <div class="wrapper">
    <h3>Categories Tracked</h3>

    <ul>
      <li v-for="(category, index) in user.categoriesToTrack" :key="index">
        <span>
          <p>{{category.title}}</p>
          <p>x</p>
        </span>
      </li>
    </ul>

    <form @submit.prevent="addCategories">
      <label for="addCategories">Add Categories (comma separated)</label>
      <input type="text" v-model="state.categoriesToAdd">
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import store from '../store'
import { updateUser } from '../ApiService/user.ApiService'

export default {
  name: 'SetupCategories',

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
  margin-top: 10px;
  display: flex;
  width: 60%;
  max-width: 800px;

  h3 {
    margin: 0 0 5px;
    font-weight: 600;
  }

  ul {
    width: 50%;
    padding: 0;
    margin: 0 0 10px;
    display: flex;
    flex-wrap: wrap;

    li {
      width: 25%;
      margin-bottom: 10px;
      list-style-type: none;
      cursor: pointer;

      span {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 0 10px;
        padding: 0 10px;
        border-radius: 10px;
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: 500;
        vertical-align: middle;
        background-color: rgb(219, 219, 219);

        p {
          margin: 0;

          &:last-child {
            color: rgb(165, 165, 165);
          }
        }
      }
    }
  }

}
</style>
