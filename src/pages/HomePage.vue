<script setup lang="ts">
import BannerComp from '../components/BannerComp.vue'
import ContentList from '../components/ContentList.vue'
import useContents from '../composables/useContents'
import useAuthStore from '../stores/useAuthStore'

const store = useAuthStore()

const { contents, error } = useContents()
</script>

<template>
  <BannerComp />
  <div v-if="!contents">Loading...</div>
  <div v-if="error" class="text-center mt-5 text-red-500 font-bold">
    {{ error }}
  </div>
  <div v-else-if="contents" class="flex flex-col items-end mx-32 my-9">
    <router-link
      v-if="store.isLoggedIn"
      to="/create"
      class="bg-orange-500 p-3 rounded-lg text-white hover:bg-orange-600 text-lg"
    >
      Create New Content
    </router-link>
    <ContentList :contents="contents" />
  </div>
</template>
