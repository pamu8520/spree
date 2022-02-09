<template>
    <button  class="button">
        <slot> </slot>
    </button>
</template>

<script>

</script>

<style scoped>
  .button {
    display: inline-block;
    margin: 10px 10px;
    background: #ededed;
    border-radius: 4px;
    color: rgb(57, 57, 57);
    border-radius: 4px;
    border: 1px solid transparent;
    font-family: "Quicksand", sans-serif;
    font-size: 16px;
    background-color: #ededed;
    padding: 6px 14px;
    display: flex;
    flex-shrink: 1;
  }
  .button:hover {
    background: rgb(white, white, white);
    border-radius: 4px;
    border: 1px solid rgb(57, 57, 57);
    color: #black;
  }
</style>
