<template>
  <div>
    <a-form class="bgw pd-12" layout="inline">
      <a-form-item label="theme">
        <a-select v-model:value="theme" style="width:180px;">
          <a-select-option value="vs">vs</a-select-option>
          <a-select-option value="vs-dark">vs-dark</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="language">
        <a-select v-model:value="language" style="width:180px;">
          <a-select-option value="javascript">javascript</a-select-option>
          <a-select-option value="html">html</a-select-option>
          <a-select-option value="css">css</a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
    <MonacoEditor v-model:value="value" :language="language" :theme="theme" class="mt-12" style="height:800px"/>
    <span>{{value}}</span>
  </div>
</template>

<script lang="ts">
import MonacoEditor from '@/components/MonacoEditor/index.vue'

import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Monaco',
  components: { MonacoEditor },
  setup () {
    const language = ref<string>('javascript')
    const theme = ref<string>('vs')
    const value = ref<string>('"hello monaco"')
    return { language, theme, value }
  }
})
</script>

<style scoped lang="less">

</style>
