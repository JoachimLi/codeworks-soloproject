<template>
  <div class="modal-wrapper">
    <div class="modal">
      <h4>add flight</h4>
      <button @click="$emit('toggleModal')">close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormAddFlight',
  emits: ['toggleModal']
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
    width: 50vw;
    height: 50vh;
    background-color: white;
    border-radius: 5px;
  }
}
</style>
