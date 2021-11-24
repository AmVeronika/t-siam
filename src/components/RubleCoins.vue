<template>
  <div class="ruble-coins">
    <button
      class="ruble-coins__btn"
      v-for="rub in getMoneyInWallet"
      :key="rub.nominal"
      @click.prevent="depositedCoins(rub)">
      <img
        class="ruble-coins__btn-img"
        :src="require(`../assets/img/${rub.nominal}rub.png`)"
        :alt="rub.nominal + ' руб.'"
      />
      <span> {{ rub.quantity }} шт.</span>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "RubleCoins",
  methods: {
    ...mapMutations(["depositedCoins"]),
  },
  computed: {
    ...mapGetters(["getMoneyInWallet"]),
  },
};
</script>

<style lang="scss">
.ruble-coins {
  display: flex;
  flex-direction: column;
  gap: 12px;

  &__btn {
    display: flex;
    align-items: center;
    gap: 35px;
    background: none;
    border: none;

    &-img {
      width: 45px;
      height: 45px;
      object-fit: cover;
      border: 1px solid grey;
    }

    & > p {
      font-size: 24px;
    }
  }
}
</style>
