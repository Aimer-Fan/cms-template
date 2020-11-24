<template>
  <div class="main-layout" :class="device">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import deviceHock from '@/hocks/device'
import bindingLocalStorage from '@/hocks/bindingLocalStorage'

export default defineComponent({
  name: 'App',
  setup () {
    bindingLocalStorage()
    return { ...deviceHock() }
  }
})
</script>
