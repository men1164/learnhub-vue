<script setup lang="ts">
import NavbarComp from './components/NavbarComp.vue'
</script>

<template>
  <div class="min-h-screen w-full">
    <navbar-comp />
    <router-view />
  </div>
</template>
