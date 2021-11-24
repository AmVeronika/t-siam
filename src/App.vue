<template>
  <div id="app" class="app">
    <h1 class="app__title"><span>&#9749;</span>Coffee Machine WPF Client</h1>
    <div class="app__wrapp">
      <CoffeeMachine/>
      <Customer/>
    </div>

  </div>
</template>

<script>


import CoffeeMachine from "./components/CoffeeMachine";
import Customer from "./components/Customer";

export default {
  name: "App",
  components: {
    CoffeeMachine,
    Customer
  }
};
</script>

<style lang="scss">
.app {
  max-width: 900px;
  width: 100%;
  min-height: 500px;
  padding: 10px;
  margin: 0 auto;
  border: 1px solid grey;
  &__title {
    font-size: 16px;
    font-weight: 400;
    span {
      padding: 5px;
      margin-right: 5px;
      background: #ffec00;
      border-radius: 50%;
    }
  }
  &__wrapp {
    display: flex;
  }
}
p {
  margin: 0;
}
button {
  cursor: pointer;
  transition: 0.2s ease-out;
  &:hover {
    background: rgba(0, 0, 0, 0.59);
    color: yellow;
  }
}
</style>
