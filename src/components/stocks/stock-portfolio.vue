<template>
  <div class="stock" v-if="stock.quantity > 0">
    <div class="stock-header blue darken-3">
      <h3>
        {{ stock.name }} (Preço: {{ stock.price | currency }} | Qtde:
        {{ stock.quantity }})
      </h3>
    </div>
    <div class="stock-content container">
      <v-text-field
        label="Quantidade"
        type="number"
        style="margin: 0"
        v-model.number="val"
        @keydown.13="stockSell()"
      />
      <v-btn :disabled="disable" @click="stockSell">{{
        this.val > this.stock.quantity ? "INSUFICIENTE" : "VENDER"
      }}</v-btn>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      val: 0,
    };
  },
  computed: {
    disable() {
      if (this.val <= 0 || this.val > this.stock.quantity || !Number.isInteger(this.val))
        return true;
      else return false;
    },
  },
  methods: {
    ...mapMutations(["setStocks"]),
    stockSell() {
      if (this.val <= this.stock.quantity && this.val > 0 && Number.isInteger(this.val)) {
        this.stock.quantity -= this.val;
        this.setStocks({ sell: true, value: this.stock.price * this.val });
        this.val = 0;
      }
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
  background: #3362af;
  color: white;
  padding: 15px;
}
.stock-content {
  height: 100px;
  display: flex;
}
</style>
