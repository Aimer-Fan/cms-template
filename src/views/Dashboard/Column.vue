<template>
  <a-card :loading="loading">
    <div ref="container"></div>
  </a-card>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { Column } from '@antv/g2plot'

export default defineComponent({
  name: 'Column',
  setup () {
    const container = ref<HTMLElement | null>(null)
    const loading = ref<boolean>(false)

    onMounted(async () => {
      loading.value = true
      const res = await fetch('https://gw.alipayobjects.com/os/antfincdn/K0kfOzo4j%24/column.json')
      loading.value = false
      const data = await res.json()
      if (!container.value) return
      const columnPlot = new Column(container.value, {
        data,
        xField: 'type',
        yField: 'sales'
      })
      columnPlot.render()
    })
    return { container, loading }
  }
})
</script>
