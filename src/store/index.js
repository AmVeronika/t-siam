import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //Товары
    goodsList: [
      {
        id: 1,
        name: "Чай",
        price: 13,
        quantity: 10,
      },
      {
        id: 2,
        name: "Кофе",
        price: 18,
        quantity: 20,
      },
      {
        id: 3,
        name: "Кофе с молоком",
        price: 21,
        quantity: 20,
      },
      {
        id: 4,
        name: "Сок",
        price: 35,
        quantity: 15,
      },
    ],
    //Деньги в автомате
    coins: [
      {
        nominal: 1,
        quantity: 100,
      },
      {
        nominal: 2,
        quantity: 100,
      },
      {
        nominal: 5,
        quantity: 100,
      },
      {
        nominal: 10,
        quantity: 100,
      },
    ],
    //Кошелек
    moneyInWallet: [
      {
        nominal: 1,
        quantity: 10,
      },
      {
        nominal: 2,
        quantity: 30,
      },
      {
        nominal: 5,
        quantity: 20,
      },
      {
        nominal: 10,
        quantity: 15,
      },
    ],
    //Внесённая сумма
    depositedAmount: 0,
    // Общая сумма в автомате
    moneyInTheMachine: 0,
  },
  getters: {
    getGoodsList: (state) => state.goodsList,
    getCoins: (state) => state.coins,
    getMoneyInWallet: (state) => state.moneyInWallet,
    getDepositedAmount: (state) => state.depositedAmount,
    getMoneyInTheMachine: (state) =>
      (state.moneyInTheMachine = state.coins.reduce((accumulator, newobj) => {
        return accumulator + newobj.nominal * newobj.quantity;
      }, 0)),
  },
  mutations: {
    depositedCoins(state, payload) {
      // Уменьшение кол-ва монет в кошельке
      let objIndex = state.moneyInWallet.findIndex(
        (obj) => obj.nominal === payload.nominal
      );
      if (state.moneyInWallet[objIndex].quantity > 0) {
        state.moneyInWallet[objIndex].quantity--;
        // Отображение внесенной суммы
        state.depositedAmount += state.moneyInWallet[objIndex].nominal;
        // Пополнение монет в автомате
        let coinsIndex = state.coins.findIndex(
          (obj) => obj.nominal === payload.nominal
        );
        state.coins[coinsIndex].quantity++;
      }
    },
    // Забрать сдачу
    pickUpChange(state) {
      function deductionOfCoins(num, ind) {
        if (state.coins[ind].quantity > 0) {
          let quantityOfCoinsToBeDeducted = Math.trunc(
            state.depositedAmount / num
          );
          if (state.coins[ind].quantity - quantityOfCoinsToBeDeducted < 0) {
            quantityOfCoinsToBeDeducted =
              quantityOfCoinsToBeDeducted +
              (state.coins[ind].quantity - quantityOfCoinsToBeDeducted);
          }
          state.coins[ind].quantity =
            state.coins[ind].quantity - quantityOfCoinsToBeDeducted;
          state.depositedAmount =
            state.depositedAmount - quantityOfCoinsToBeDeducted * num;
          state.moneyInWallet.forEach((el) => {
            if (el.nominal === num) {
              el.quantity = el.quantity + quantityOfCoinsToBeDeducted;
            }
          });
        }
      }
      if (state.depositedAmount >= 10) {
        deductionOfCoins(10, 3);
      }
      if (state.depositedAmount >= 5) {
        deductionOfCoins(5, 2);
      }
      if (state.depositedAmount >= 2) {
        deductionOfCoins(2, 1);
      }
      if (state.depositedAmount >= 1) {
        deductionOfCoins(1, 0);
      }
    },
    // Покупка товаров
    shopping(state, good) {
      if (state.depositedAmount - good.price >= 0) {
        if (good.quantity > 0) {
          state.depositedAmount = state.depositedAmount - good.price;
          let goodsIndex = state.goodsList.findIndex(
            (obj) => obj.id === good.id
          );
          state.goodsList[goodsIndex].quantity--;
          alert("Поздравляем с покупкой");
        } else {
          alert("Товара нет в наличии");
        }
      } else {
        alert("Не хватает средств");
      }
    },
  },
});
