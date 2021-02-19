<template>
  <div ref="container" style="position:relative;z-index:0;"></div>
</template>

<script lang="ts">
import E from 'wangeditor'

import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'WangEditor',
  props: {
    value: { type: String, default: '' }
  },
  setup (props, { emit }) {
    const container = ref()
    let editor: null | E = null

    onMounted(() => {
      editor = new E(container.value)
      editor.config.onchange = (newHTML: string) => {
        emit('update:value', newHTML)
      }
      editor.create()
    })

    const getHTML = (): string => {
      return editor?.txt.html() || ''
    }

    return { container, getHTML }
  }
})

</script>
