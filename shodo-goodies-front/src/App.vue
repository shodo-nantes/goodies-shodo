<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderVue from './views/HeaderVue.vue'
</script>

<template>
  <HeaderVue />
  <RouterView /> 
</template>
<style lang="scss">
@import "./assets/main.scss";
</style>
