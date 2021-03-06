<template>
  <div ref="container"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, PropType, ref, watch } from 'vue'
import * as monaco from 'monaco-editor'
import { Theme } from './index'

/**
 * @description 基于 Monaco 编辑器的二次封装 https://github.com/microsoft/monaco-editor
 * @author AimerFan
 * @date 2021/02/05
*/
export default defineComponent({
  name: 'MonacoEditor',
  props: {
    language: { type: String, default: 'text' },
    theme: { type: String as PropType<Theme>, default: 'vs' },
    readOnly: { type: Boolean, default: false },
    value: { type: String, default: '' }
  },
  setup (props, { emit }) {
    const container = ref<HTMLElement | null>(null)
    let instance: monaco.editor.IStandaloneCodeEditor | null = null

    watch(() => props.language, (language) => {
      if (!instance) return
      const model = instance.getModel()
      if (!model) return
      monaco.editor.setModelLanguage(model, language)
    })
    watch(() => props.theme, (theme) => {
      if (!instance) return
      monaco.editor.setTheme(theme)
    })

    onMounted(() => {
      if (container.value && !instance) {
        const { language, theme, readOnly, value } = props
        instance = monaco.editor.create(container.value, {
          automaticLayout: true,
          mouseWheelZoom: true,
          theme,
          language,
          readOnly,
          value
        })

        instance.onDidChangeModelContent((e) => {
          if (!instance) return
          const value = instance.getValue()
          if (value !== props.value) {
            emit('update:value', value, e)
          }
        })
      }
    })

    onUnmounted(() => {
      instance && instance.dispose()
      instance = null
    })
    return { container }
  }
})
</script>

<style scoped lang="less">

</style>
