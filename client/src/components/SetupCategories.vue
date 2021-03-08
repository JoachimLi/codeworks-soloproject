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
      <label for="addCategories">
        <p>Add Categories</p>
        <p>(comma separated)</p>
      </label>
      <input type="text" v-model="state.categoriesToAdd">
      <Button text="Add"/>
    </form>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import store from '../store'
import { updateUser } from '../ApiService/user.ApiService'
import Button from './Button.vue'

export default {
  components: { Button },
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
  font-size: 1rem;
  font-weight: 500;

  h3 {
    margin: 0 0 5px;
    font-weight: 600;
  }

  ul {
    box-sizing: border-box;
    width: 50%;
    min-height: 1.5rem;
    padding: 10px;
    margin: 0 0 10px;
    display: flex;
    flex-wrap: wrap;
    box-shadow: 0 0 5px gray;
    border-radius: 5px;

    li {
      width: 25%;
      margin-bottom: 5px;
      list-style-type: none;
      cursor: pointer;

      span {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 5px;
        padding: 0 10px;
        border-radius: 10px;
        text-transform: uppercase;
        vertical-align: middle;
        background-color: rgb(219, 219, 219);

        p:last-child {
            color: rgb(165, 165, 165);
        }
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    width: 50%;

    label {
      display: flex;
      margin-bottom: 5px;

      p {
        font-weight: 600;

        &:last-child {
          margin-left: 5px;
          font-weight: 300;
        }
      }
    }

    input {
      font-size: 1rem;
      padding: 3px;
      padding-left: 5px;
      border: none;
      border-radius: 5px;
      box-shadow: 0 0 5px gray;
      margin-bottom: 10px;
    }
  }
}
</style>
