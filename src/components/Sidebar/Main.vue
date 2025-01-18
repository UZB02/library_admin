<template>
     <div class="container">
         <Drawer v-model:visible="visible" header="Side Bar">
    <div class="grid grid-cols-1 gap-4">
      <div v-for="item in menues" @click="router.push(item.to)" class="flex items-center gap-4 font-bold cursor-pointer rounded-md transition duration-200 bg-slate-100/50 hover:bg-slate-100 p-2">
        <i :class="item.icon"></i>
        <h3 class="">{{item.label}}</h3>
      </div>
    </div>
  </Drawer>
  <Button icon="pi pi-arrow-right" @click="visible = true" />
     </div>
</template>
<script setup>
import { ref, defineProps } from "vue";
import Drawer from "primevue/drawer";
import Button from "primevue/button";
import "primeicons/primeicons.css";
import axios from "axios";

const menues = ref([
  { label: "Admins", icon: "pi pi-users", to: "/admins" },
  { label: "Books", icon: "pi pi-book", to: "/roles" },
  { label: "Categories", icon: "pi pi-server", to: "/permissions" },
  { label: "Catalogs", icon: "pi pi-database", to: "/settings" }
]);

const props = defineProps({
  visible: {
    type: Boolean,
    default: false
  }
});
const visible = ref(false);
</script>
<style scoped>
    
</style>