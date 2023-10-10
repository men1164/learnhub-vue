<script setup lang="ts"></script>
<template>
  <form
    class="flex flex-col gap-6 max-w-lg bg-gray-100 rounded-xl mx-auto my-14 py-5 px-7"
  >
    <div class="flex flex-col gap-2">
      <label>Video Url:</label>
      <input class="p-3 rounded" type="text" required />
    </div>
    <div class="flex flex-col gap-2">
      <label>Comment:</label>
      <input class="p-3 rounded" type="text" required />
    </div>
    <div class="flex items-center gap-2">
      <label>Rating:</label>
      <input type="number" class="p-3 rounded" />
    </div>
    <button class="bg-orange-500 p-3 rounded-lg text-white hover:bg-orange-600">
      Submit
    </button>
  </form>
</template>
