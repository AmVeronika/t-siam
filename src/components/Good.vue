<template>
  <div class="wrapp">
    <div class="good" v-for="good in getGoodsList" :key="good.id">
      <p class="good__name">{{ good.name }}</p>
      <p class="good__price">{{ good.price }} руб.</p>
      <p class="good__quantity">{{ good.quantity }} шт.</p>
      <button class="button" @click="shopping(good)">Купить</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "Good",
  methods: {
    ...mapMutations(["shopping"]),
  },
  computed: {
    ...mapGetters(["getGoodsList"]),
  },
};
</script>

<style lang="scss">
.wrapp {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.good {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  &__name {
    width: 100px;
  }
}
.button{
  padding: 5px 10px;
  background: #ede6e6;}
</style>
