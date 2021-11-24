<template>
  <fieldset class="wrapper">
    <legend>
      <slot name="header"></slot>
    </legend>
    <slot name="main"></slot>
  </fieldset>
</template>

<script>
export default {
  name: "wrapper-components",
};
</script>

<style lang="scss">
.wrapper {
  padding: 10px;
  border: 2px solid #b7acac;
  border-radius: 4px;
  height: 96%;
  &__header {
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
