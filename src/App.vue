<script setup>
import { RouterLink, RouterView } from 'vue-router'
import theNav from './components/theNav.vue'
import theHeader from './components/theHeader.vue'
import theFooter from './components/theFooter.vue'
</script>

<template>       
  <theNav></theNav>
 <theHeader></theHeader>
 <RouterView></RouterView>

<theFooter></theFooter>
</template>

<style scoped>

</style>
