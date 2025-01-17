<template>
  <header class="w-full shadow sticky top-0 z-50 bg-white">
    <Nav></Nav>
  </header>
  <RouterView></RouterView>
</template>
<script setup>
import { RouterView } from "vue-router";
import Nav from "../components/Nav/MainNav.vue"
import { ref } from "vue";
</script>
<style scoped></style>
