<template>
  <div id="saldo">
    <v-card style="background-color: #f4f4f4; padding: 15px; z-index: 1">
      <h4>SALDO: {{ getFunds | currency }}</h4>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['getFunds'])
  }
};
</script>

<style scoped>
#saldo {
  display: none;
}
@media (max-width: 1000px) {
  #saldo {
    display: initial;
    position: fixed;
    bottom: 20px;
    right: 20px;
    user-select: none;
  }
}
</style>