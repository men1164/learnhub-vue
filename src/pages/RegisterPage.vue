<script setup lang="ts"></script>
<template>
  <form
    class="flex flex-col gap-6 max-w-xs bg-gray-100 rounded-xl mx-auto my-14 py-5 px-7"
  >
    <div class="flex flex-col gap-2">
      <label>Username</label>
      <input class="p-3 rounded" type="text" required />
    </div>
    <div class="flex flex-col gap-2">
      <label>Name</label>
      <input class="p-3 rounded" type="text" required />
    </div>
    <div class="flex flex-col gap-2">
      <label>Password</label>
      <input class="p-3 rounded" type="password" required />
    </div>
    <button class="bg-orange-500 p-3 rounded-lg text-white hover:bg-orange-600">
      Register
    </button>
  </form>
</template>
