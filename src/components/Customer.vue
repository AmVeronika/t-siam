<template>
  <div class="customer">
    <wrapper-components>
      <template v-slot:header>
        <h3 class="wrapper__header">Клиент</h3>
      </template>
      <template v-slot:main>
        <RubleCoins />
        <p>Сумма {{ calculating }} руб.</p>
        <button class="customer__button" @click="pickUpChange">
          Забрать сдачу
        </button>
      </template>
    </wrapper-components>
  </div>
</template>

<script>
import WrapperComponents from "./WrapperComponents";
import RubleCoins from "./RubleCoins";
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Customer",
  components: {
    WrapperComponents,
    RubleCoins,
  },
  methods: {
    ...mapMutations(["pickUpChange"]),
  },
  computed: {
    ...mapGetters(["getMoneyInWallet"]),
    calculating() {
      return this.getMoneyInWallet.reduce((accumulator, newobj) => {
        return accumulator + newobj.nominal * newobj.quantity;
      }, 0);
    },
  },
};
</script>

<style lang="scss">
.customer {
  width: 35%;
  &__button {
    width: 100%;
    margin-top: 81%;
    padding: 5px 10px;
    background: #ede6e6;
  }
  p {
    text-align: right;
  }
}
</style>
