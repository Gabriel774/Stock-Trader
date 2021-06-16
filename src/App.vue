<template>
  <div>
    <app-header />
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view class="container" />
      </keep-alive>
    </transition>
    <Saldo />
  </div>
</template>

<script>
import Header from "./components/Header";
import Saldo from "./components/Saldo";
import { mapMutations } from "vuex";
export default {
  components: { "app-header": Header, Saldo },
  created() {
    let dataLocalJSON = localStorage.getItem("dados");
    if(Array.isArray(dataLocalJSON) && dataLocalJSON != '' && dataLocalJSON != undefined && dataLocalJSON != null) {
    let dataLocal = JSON.parse(dataLocalJSON)
    this.carregar(JSON.parse(dataLocal));
    }
  },
  methods: {
    ...mapMutations(["carregar"]),
  },
};
</script>

<style>
* {
  font-family: "roboto";
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

