<template>
  <div class="stock">
    <div class="stock-header green darken-3">
      <h3>{{ stock.name }} (Preço: {{ stock.price | currency }})</h3>
    </div>
    <div class="stock-content container">
      <v-text-field
        label="Quantidade"
        type="number"
        v-model.number="val"
        style="margin: 0"
        @keydown.13="stockBuy()"
      />
      <v-btn :disabled="disable" @click="stockBuy()">{{
        val * stock.price > getFunds ? "INSUFICIENTE" : "COMPRAR"
      }}</v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      val: 0,
    };
  },
  methods: {
    ...mapMutations(["setStocks"]),
    stockBuy() {
      if (
        this.stock.price * this.val <= this.getFunds &&
        this.val > 0 &&
        Number.isInteger(this.val)
      ) {
        this.stock.quantity += this.val;
        this.setStocks({ sell: false, value: this.stock.price * this.val });
        this.val = 0;
      }
    },
  },
  computed: {
    ...mapGetters(["getFunds"]),
    disable() {
      if (
        this.val <= 0 ||
        this.stock.price * this.val > this.getFunds ||
        !Number.isInteger(this.val)
      )
        return true;
      else return false;
    },
  },
};
</script>

<style scoped>
.stock {
  width: 360px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.425);
  margin: auto;
  margin-bottom: 30px;
  transition: all 0.2s;
}
.stock-header {
  color: white;
  padding: 15px;
}
.stock-content {
  height: 100px;
  display: flex;
}
</style>
