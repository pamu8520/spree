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
    padding: 0.5em 1em;
    background: #ededed;
    border: 2px solid rgb(57, 57, 57);
    border-radius: 3px;
    color: rgb(57, 57, 57);
    font-family: "Quicksand", sans-serif;
    font-size: 1em;
    font-weight: 700;
    letter-spacing: 0.02em;
    line-height: 1;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: 0.3s;
  }
  .button:hover {
    background: rgb(57, 57, 57);
    color: #fff;
  }
</style>
