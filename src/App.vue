<script setup lang="ts">
import BannerComp from './components/BannerComp.vue'
import NavbarComp from './components/NavbarComp.vue'
</script>

<template>
  <div class="min-h-screen w-full">
    <navbar-comp />
    <banner-comp />
    <router-view />
  </div>
</template>
