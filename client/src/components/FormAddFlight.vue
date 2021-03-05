<template>
  <div class="modal-wrapper">
    <div class="modal">
      <div class="header">
        <h4>add flight</h4>
        <a @click="$emit('toggleModal')">X</a>
      </div>
      <form @submit.prevent="">
        <div class="input-item" v-for="(category, index) in props.categories" :key="index">
          <label>{{category.title}}
            <input type="text">
          </label>
        </div>
        <button type="Submit">Log</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormAddFlight',
  props: 'categories',
  emits: 'toggleModal'
}
</script>

<style lang="scss" scoped>
.modal-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(31, 31, 31, 0.5);

  .modal {
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 50vh;
    background-color: white;
    border-radius: 5px;

    .header {
      display: flex;
      justify-content: flex-end;

      h4 {
        flex-grow: 5;
      }

      a {
        margin: 20px;
        cursor: pointer;
      }
    }

    form {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
