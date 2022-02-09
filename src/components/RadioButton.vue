<template>
    <div>
        <label class="form-control">
        <input type="radio" name="radio" />
        Man
        </label>

        <label class="form-control">
        <input type="radio" name="radio" />
        Kvinna
        </label>
    </div>
</template>

<script>

</script>

<style scoped>

.form-control {
    font-family: system-ui, sans-serif;
    font-size: 1em;
    font-weight: bold;
    line-height: 1.1;
      display: grid;
    grid-template-columns: 1em auto;
    gap: 0.5em;
    margin-top: 1em;
    accent-color: rgba(250, 15, 117);
}

input[type="radio"] {
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  margin: 0;
    font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid currentColor;
  border-radius: 50%;
    transform: translateY(-0.075em);
  display: grid;
  place-content: center;
}

input[type="radio"]:before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em rgba(250, 15, 117);
    background-color: CanvasText;
}

input[type="radio"]:checked::before {
    transform: scale(1);
}

input[type="radio"]:after {
    box-sizing: border-box;
}

</style>
