<template>
  <div id="portfolio">
        <stock-portfolio v-for="(stock, i) in stocks" :stock="stock" :key="i"></stock-portfolio>
    <v-sheet v-if="!checkStocks" color="teal" elevation="2" class="pa-2 mt-3 fluid primary" key="test">
      <v-icon class="primary white--text">info</v-icon>
      <span class="headline white--text center  font-weight-light">
        Compre ações para começar, suas ações adquiridas irão aparecer aqui!
      </span>
    </v-sheet>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import stock from "./stocks/stock-portfolio";
export default {
  computed: {
    ...mapGetters(["getStocks"]),
    stocks() {
      return this.getStocks;
    },
    checkStocks() {
      let soma = 0
      this.stocks.map(stock => (soma += stock.quantity))
      return soma>0?true:false
    }
  },
  components: { "stock-portfolio": stock },
};
</script>

<style>
#portfolio {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.primary {
  text-align: center;
}
.fluid {
  width: 100%;
}
.fade-enter-active {
  animation: fade-in 0.35s ease;
}

.fade-leave-active {
  animation: fade-out 0.35s ease;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
}

@keyframes fade-out {
  to {
    opacity: 0;
    transform: translateX(30px);
  }
}
</style>