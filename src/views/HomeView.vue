<script setup>

import { ref, onBeforeMount } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
const route = useRoute();
const monsterId = route.params.id;
    const API = "https://metallo.ew.r.appspot.com/monsters";
    const mon = ref([]);

    onBeforeMount(async () => {
      
        const response = await axios.get(API);

        if (response.status === 200) {
          mon.value = response.data;
        } else {
          console.error('Oops');
        }
      
    });
    const goToMonster = (monsterId) => {
  route.push({
    name: 'monster',
    params: { id: monsterId }
  });
}
  
</script>

<template>
  <section data-bs-version="5.1" class="features05 cid-sRQcud4Jjb" id="features05-2">
    <div class="container-fluid">
      <div class="wrapper">
        <div class="row title-section">
          <h2 class="mbr-section-title mbr-fonts-style display-2"><strong>Monsters</strong></h2>
        </div>
        <div class="row justify-content-center">
          <div v-for="monster in mon" :key="monster.id" class="col-4 col-md-2 mb-2 mb-md-5">
            <div class="card">
              <img :src="monster.image" alt="" class="card-img-top h-100">
              <div class="card-body">
                <h3 class="card-title mbr-section-subtitle mbr-fonts-style"><strong>{{ monster.name }}</strong></h3>
                <ul class="list mbr-fonts-style display-7">
                  <li>{{ monster.category }}</li>
                  <li>{{ monster.description }}</li>
                </ul>
                <div class="mbr-section-btn"><a @click="goToMonster(monsterId)" class="justify-content-center btn btn-primary display-4">
                  VOIR
                </a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
