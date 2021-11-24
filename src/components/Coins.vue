<template>
<div class="wrapp">
  <div class="coins" v-for="coin in getCoins" :key="coin.nominal">
    <p>{{coin.nominal}} руб.</p>
    <p> - </p>
    <p>{{ coin.quantity }} шт.</p>
  </div>
</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Coins",
  computed: {
    ...mapGetters(["getCoins"])
  }
}
</script>

<style lang="scss">
.wrapp {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.coins {
  display: flex;
  justify-content: flex-start;
  gap: 14px;
  & > p {
    font-size: 24px;
  }
}
</style>
