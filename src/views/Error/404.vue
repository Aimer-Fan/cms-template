<template>
  <error :config="config" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Error from '@/components/Execption/index.vue'
import errConfig from './config'
export default defineComponent({
  name: '404',
  components: { Error },
  setup () {
    const config = errConfig[404]
    return { config }
  }
})
</script>

<style scoped lang="less">

</style>
