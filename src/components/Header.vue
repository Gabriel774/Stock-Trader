<template>
  <div>
    <div id="header">
      <div id="header-left-mobile">
        <p
          style="
            font-size: 20pt;
            margin: auto;
            font-weight: 350;
            margin-left: 20px;
          "
        >
          <strong>STOCK</strong>TRADER
        </p>
      </div>

      <div id="header-left">
        <p
          style="
            font-size: 20pt;
            margin: auto;
            font-weight: 350;
            margin-left: 20px;
          "
        >
          <strong>STOCK</strong>TRADER
        </p>
        <div class="menu">
          <v-btn
            v-for="link in links"
            :key="link.nome"
            class="btn"
            :to="link.href"
            flat
          >
            {{ link.nome }}
          </v-btn>
        </div>
      </div>

      <div id="header-right">
        <v-btn class="btn" @click="finalizarDia()" flat>FINALIZAR DIA</v-btn>
        <v-btn class="btn" @click="salvar()" flat>SALVAR</v-btn>
        <v-btn class="btn" @click="initLoad()" flat>CARREGAR</v-btn>
        <p
          style="
            font-size: 10pt;
            margin: auto;
            font-weight: 550;
            margin-right: 20px;
            margin-left: 5px;
          "
        >
          SALDO {{ getFunds | currency }}
        </p>
      </div>

      <div id="header-right-mobile">
        <v-btn
          depressed
          float
          style="margin: auto; height: 100%; margin-right: 20px"
          @click="drawer = true"
        >
          <v-icon large depressed> mdi-menu </v-icon>
        </v-btn>
      </div>
      <v-navigation-drawer v-model="drawer" absolute bottom temporary>
        <div>
          <p style="font-size: 20pt; margin: auto; font-weight: 350; margin: 15px; text-align: center;">
            <strong>STOCK</strong>TRADER
          </p>
        </div>
        <v-divider inset style="margin: auto; margin-top: 10px" />
        <h3 style="text-align: center; margin-top: 10px; margin-bottom: 5px">
          NAVEGAR
        </h3>
        <v-btn v-for="link in links" :key="link.nome" :to="link.href" class="btn-drawer" flat>
          {{ link.nome }}
        </v-btn>
        <v-divider inset style="margin: auto; margin-top: 10px" />
        <h3 style="text-align: center; margin-top: 10px">INTERAGIR</h3>
        <v-btn style="margin-top: 5px" class="btn-drawer" flat 
        @click="[finalizarDia(), drawer = false]"
        >FINALIZAR DIA</v-btn>
        <v-btn class="btn-drawer" flat @click="[salvar(), drawer = false]">SALVAR</v-btn>
        <v-btn class="btn-drawer" flat @click="[initLoad(), drawer = false]">CARREGAR</v-btn>
      </v-navigation-drawer>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  computed: {
    ...mapGetters(['getFunds', 'getStocks'])
  },
  data() {
    return {
      drawer: false,
      links: [
        { nome: "INÍCIO", href: "/" },
        { nome: "PORTFÓLIO", href: "/portfolio" },
        { nome: "AÇÕES", href: "/stocks" },
      ],
    }
  },
    methods: {
      ...mapMutations(['carregar', 'finalizarDia']),
      initLoad() {
        this.$http("").then((res) => this.carregar(res.data))
      },
      salvar() {
        const dados = {funds: this.getFunds, stocks: this.getStocks}
        const stringjson = JSON.stringify(dados)
        const savejson = JSON.parse(stringjson)
        this.$http.post("", savejson)
      }
    },
};
</script>

<style scoped>
#header {
  background: #f4f4f4;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.479);
  height: 60px;
}
#header-left,
#header-right {
  display: flex;
}
.btn {
  margin: 0;
  height: 100%;
  background: #f4f4f4;
  border-radius: 0;
}
.menu {
  padding-left: 10px;
}

#header-left-mobile,
#header-right-mobile {
  display: none;
}

.btn-drawer {
  width: 100%;
  margin: auto;
  border-radius: 0;
}
@media (max-width: 1000px) {
  #header-right,
  #header-left {
    display: none;
  }
  #header-left-mobile,
  #header-right-mobile {
    display: flex;
  }
}
</style>