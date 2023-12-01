<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div>
    <TheHeader></TheHeader>
    <div class="margin">
      <router-view v-slot="slotProps">
        <transition name="route">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    </div>
  </div>
</template>
<script>
import TheHeader from './views/TheHeader.vue'
export default {
  components: {
    TheHeader,
  },
  data() {
    return {

    }
  }
}
</script>
<style>
* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

button {
  border-radius: 10px;
  border: 1px solid rgba(0, 255, 179, 0.623);
  padding: 9px 18px;
  background-color: rgb(16, 16, 16);
  cursor: pointer;
  color: white;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.flex-vertical {
  flex-direction: column;
}

.frontend {
  color: rgb(245, 241, 190);
  background-color: rgb(208, 68, 40);
}

.backend {
  color: rgb(197, 35, 197);
  background-color: #CCDDFF;
}

.career {
  background-color: #2b5522;
  color: rgb(232, 232, 113)
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
}

.route-enter-active,
.route-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
}</style>
