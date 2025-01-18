<template>
  <header class="w-full shadow sticky top-0 z-50 bg-white">
    <div class="container">
      <Nav></Nav>
    </div>
  </header>
  <div>
    <MainSidebar></MainSidebar>
  </div>
    <RouterView></RouterView>
</template>
<script setup>
import { RouterView } from "vue-router";
import Nav from "../components/Nav/MainNav.vue"
import MainSidebar from "../components/Sidebar/Main.vue"
import { ref } from "vue";
</script>
<style scoped></style>
