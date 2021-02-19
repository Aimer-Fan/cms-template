<template>
  <a-card>
    <RichEditor v-model:value="value" />
  </a-card>

  <a-card class="mt-24">
    {{ value }}
  </a-card>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import RichEditor from '@/components/RichEditor'

export default defineComponent({
  name: 'index',
  components: { RichEditor },
  setup () {
    const value = ref()

    return { value }
  }
})
</script>
