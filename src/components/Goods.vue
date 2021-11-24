<template>
  <div class="goods">
    <wrapper-components>
      <template v-slot:header>
        <h4 class="wrapper__header">Товары</h4>
      </template>
      <template v-slot:main>
        <Good />
      </template>
    </wrapper-components>
  </div>
</template>

<script>
import WrapperComponents from "./WrapperComponents";
import Good from "./Good";

export default {
  name: "Goods",
  components: {
    WrapperComponents,
    Good,
  },
};
</script>

<style scoped></style>
