<template>
  <div class="coffee-machine">
    <wrapper-components>
      <template v-slot:header>
        <h3 class="wrapper__header">Кофейный автомат</h3>
      </template>
      <template v-slot:main>
        <p>Внесено {{ getDepositedAmount }} руб.</p>
        <Goods />
        <BalanceOfCoins />
      </template>
    </wrapper-components>
  </div>
</template>

<script>
import Goods from "./Goods";
import WrapperComponents from "./WrapperComponents";
import BalanceOfCoins from "./BalanceOfCoins";
import { mapGetters } from "vuex";

export default {
  name: "CoffeeMachine",
  components: {
    Goods,
    WrapperComponents,
    BalanceOfCoins,
  },
  computed: {
    ...mapGetters(["getDepositedAmount"]),
  },
};
</script>

<style lang="scss">
.coffee-machine {
  width: 65%;
}
</style>
