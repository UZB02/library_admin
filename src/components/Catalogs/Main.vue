<template>
    <div class="shadow-xl border p-4 rounded-lg">
         <div class="card flex flex-col items-center gap-2 justify-center">
        <div class="flex xs:flex-row flex-col gap-2 w-full">
            <span class="flex flex-col w-full xs:w-1/2 gap-2">
                <label for="username">Username</label>
            <InputText id="username" v-model="title" aria-describedby="username-help" />
            </span>
            <span class="flex flex-col w-full xs:w-1/2 gap-2">
                <label for="username">Categori</label>
             <Select v-model="selectedcategori" :options="categories" optionLabel="name" placeholder="Select Categori" class="w-full" />
            </span><!-- <Message size="small" severity="secondary" variant="simple">Enter your username to reset your password.</Message> -->
        </div>
         <div class="flex gap-2 xs:flex-row flex-col w-full">
            <Button label="Add" @click="addcatalog()" severity="success" class="w-full"/>
         <Button label="Cancel" @click="router.push('/')" severity="danger" class="w-full"/>
         </div>
    </div>
     <Toast style="max-width: 300px"/>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import Select from 'primevue/select';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import axios from 'axios';
import Toast from 'primevue/toast';
import router from "@/router";

import { useToast } from 'primevue/usetoast';

const toast = useToast();


function getCategories(){
    axios.get("/api/categories")
    .then((response) => {
        categories.value = response.data;
        console.log(response.data);
  }).catch((err)=>{
      console.log(err);
    });
}
getCategories()

const title = ref(null);
const selectedcategori = ref();
const categories = ref([]);

function addcatalog() {
  if (!selectedcategori.value || !title.value) {
    toast.add({
      severity: 'warn',
      summary: 'Warning',
      detail: 'Please fill in all fields.',
      life: 3000,
    });
  } else {
    axios
      .post("/api/addcatalog", {
        title: title.value,
        categori_id: selectedcategori.value.id,
      })
      .then((res) => {
        if (res.status === 200) {
          toast.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Catalog added successfully!',
            life: 3000,
          });
        }
        console.log(res.data);
      })
      .catch((err) => {
        toast.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to add catalog. Please try again.',
          life: 3000,
        });
        console.error(err);
      });
    // console.log("Title:", title.value, "Category ID:", selectedcategori.value.id);
  }
}
</script>
<style scoped>
    
</style>