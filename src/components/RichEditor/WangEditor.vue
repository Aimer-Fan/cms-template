<template>
  <div ref="container"></div>
</template>

<script lang="ts">
import E from 'wangeditor'

import { defineComponent, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'WangEditor',
  setup () {
    const container = ref()
    let editor: null | E = null

    onMounted(() => {
      editor = new E(container.value)
      editor.create()
    })

    const getHTML = (): string => {
      return editor?.txt.html() || ''
    }

    return { container, getHTML }
  }
})

</script>

<style scoped lang="less">

</style>
