<script setup>
import Drawer from 'primevue/drawer';
import Button from 'primevue/button';
import 'primeicons/primeicons.css'
import { ref } from "vue";
import axios from "axios"

const data = ref([]);

function getData(){
  axios.get('/api/categories')
   .then(response => {
      data.value = response.data;
      console.log(data.value);
    })
   .catch(error => {
      console.error(error);
    });
}

getData();

const visible = ref(false);
</script>

<template>
 <Drawer v-model:visible="visible" header="Drawer">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Drawer>
        <Button icon="pi pi-arrow-right" @click="visible = true" />
</template>
