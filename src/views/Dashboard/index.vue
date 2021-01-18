
<template>
  <div>
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
    <Cards />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Cards from './Cards.vue'

export default defineComponent({
  name: 'Dashboard',
  components: { Cards }
})
</script>
