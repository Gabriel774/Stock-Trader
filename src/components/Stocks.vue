<template>
  <div id="stocks">
      <Stock v-for="(stock, i) in stocks" :stock="stock" :key="i"></Stock>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Stock from './stocks/stock'
export default {
  computed: {
    ...mapGetters(['getStocks']),
    stocks() {
      return this.getStocks
    }
  },
  components: {Stock}
}
</script>

<style scoped>
  #stocks {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
</style>