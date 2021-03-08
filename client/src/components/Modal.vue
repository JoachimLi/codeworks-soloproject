<template>
  <div class="modal-wrapper">
    <div class="modal">
      <div class="header">
        <h4>{{text}}</h4>
        <a @click="$emit('toggleModal')">X</a>    <!-- emit event to parent -->
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Modal',
  props: [ 'text' ]
}
</script>

<style lang="scss" scoped>
.modal-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(31, 31, 31, 0.5);

  .modal {
    display: flex;
    flex-direction: column;
    width: 50vw;
    min-height: 50vh;
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
  }
}
</style>
