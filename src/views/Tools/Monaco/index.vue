<template>
  <a-card>
    <a-form layout="inline">
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
  </a-card>

  <MonacoEditor v-model:value="value" :language="language" :theme="theme" class="mt-12" style="height:800px"/>

  <a-card class="mt-24">
    <span>{{value}}</span>
  </a-card>
</template>

<script lang="ts">
import MonacoEditor from '@/components/MonacoEditor/index.vue'
import { useStore } from 'vuex'
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'Monaco',
  components: { MonacoEditor },
  setup () {
    const language = ref<string>('javascript')
    const store = useStore()
    const defaultTheme = store.getters.theme
    const targetTheme = defaultTheme === 'dark' ? 'vs-dark' : 'vs'

    const theme = ref<string>(targetTheme)
    const value = ref<string>('"hello monaco"')

    watch(() => store.state.app.theme, value => {
      const targetTheme = value === 'dark' ? 'vs-dark' : 'vs'
      theme.value = targetTheme
    })

    return { language, theme, value }
  }
})
</script>

<style scoped lang="less">

</style>
