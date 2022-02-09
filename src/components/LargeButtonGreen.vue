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
    background: rgb(102, 153, 51);
    border: 2px solid rgb(57, 57, 57);
    border-radius: 3px;
    color: #fff;
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
    background:  #006600;
    color: #fff;
  }
</style>
