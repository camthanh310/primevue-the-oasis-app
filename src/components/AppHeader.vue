<script lang="ts" setup>
import HeaderMenu from '@/components/HeaderMenu.vue'
import UserAvatar from '@/features/authentication/UserAvatar.vue'
</script>

<template>
  <header class="bg-white py-4 px-12 border-b border-gray-100 flex gap-6 items-center justify-end">
    <UserAvatar />

    <HeaderMenu />
  </header>
</template>
