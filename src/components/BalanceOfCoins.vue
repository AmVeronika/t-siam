<template>
  <div class="balance">
    <wrapper-components>
      <template v-slot:header>
        <h4 class="wrapper__header">Остаток монет</h4>
      </template>
      <template v-slot:main>
        <Coins />
        <p class="wrapper__total-amount">
          Сумма {{ getMoneyInTheMachine }} руб.
        </p>
      </template>
    </wrapper-components>
  </div>
</template>

<script>
import WrapperComponents from "./WrapperComponents";
import Coins from "./Coins";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "BalanceOfCoins",
  components: {
    WrapperComponents,
    Coins,
  },
  methods: {
    ...mapMutations(["setMoneyInTheMachine"]),
  },
  computed: {
    ...mapGetters(["getMoneyInTheMachine"]),
  },
  // mounted: function () {
  //   return this.setMoneyInTheMachine();
  // },
};
</script>

<style lang="scss">
.wrapper {
  &__total-amount {
    text-align: right;
    margin: 0;
  }
}
</style>
