<template>
  <a-card :loading="loading">
    <div ref="container"></div>
  </a-card>
</template>

<script lang="ts">
import { Pie } from '@antv/g2plot'
import { defineComponent, nextTick, onMounted, ref } from 'vue'

export default defineComponent({
  name: 'Pie',
  setup () {
    const container = ref<HTMLElement | null>(null)
    const loading = ref<boolean>(false)

    onMounted(async () => {
      loading.value = true
      const res = await fetch('https://gw.alipayobjects.com/os/antfincdn/K0kfOzo4j%24/column.json')
      const data = await res.json()
      loading.value = false

      nextTick(() => {
        if (!container.value) return
        const piePlot = new Pie(container.value, {
          data,
          angleField: 'sales',
          colorField: 'type'
        })
        piePlot.render()
      })
    })
    return { container, loading }
  }
})
</script>
