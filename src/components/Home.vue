<template>
  <div>
    <h1 style="font-weight: 350; font-size: 28pt">
      Negocie e Consulte suas Ações
    </h1>
    <v-sheet elevation="2" class="pa-2 mt-3 fluid primary">
      <v-icon class="primary">info</v-icon>
      <span class="headline white--text font-weight-light">
        Bem-vindo ao StockTrader! Seu objetivo neste jogo é comprar ações e vendelas pelo maior valor possível!
      </span>
    </v-sheet>
    <v-sheet elevation="2" class="pa-2 mt-3 fluid primary">
      <v-icon class="primary">info</v-icon>
      <span class="headline white--text font-weight-light">
        Você pode Salvar & Carregar os Dados
      </span>
    </v-sheet>
    <v-sheet elevation="2" class="pa-2 mt-3 fluid success">
      <v-icon class="success">info</v-icon>
      <span class="headline white--text font-weight-light">
        Clique em "Finalizar Dia" para iniciar um novo dia!
      </span>
    </v-sheet>
    <v-divider class="mt-4" />
    <h3 class="mt-3">Seu Saldo: {{ getFunds | currency }}</h3>
    <v-btn class="mt-3" @click="initRestart()">Reiniciar</v-btn>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getFunds'])
  },
  mounted() {
  },
  methods: {
    ...mapMutations(['restart']),
    initRestart() {
      let r = confirm("Tem certeza de que deseja reinicar seu progresso no StockTrader?")
      if(r) this.restart()
    }
  }
};
</script>

<style scoped>
.primary {
  background: #2196f3;
  color: white;
}
.success {
  background: #4caf50;
  color: white;
}
.fluid {
  width: 100%;
}

* {
  text-align: center;
}
</style>