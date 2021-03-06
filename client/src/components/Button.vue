<template>
  <button>
    <span>{{text}}</span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: [
    'text'
  ]
}
</script>

<style lang="scss" scoped>
  button {
    align-self: center;
    font-size: 1rem;
    padding: 5px 15px;
    border-radius: 5px;
    border: none;
    background-color: black;
    color: white;
    font-weight: bold;
    cursor: pointer;

    span {
      font-family: 'Quicksand', sans-serif;
      font-weight: 700;
    }
  }
</style>
