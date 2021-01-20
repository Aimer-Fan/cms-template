<template>
  <a-card :loading="loading">
    <div ref="container"></div>
  </a-card>
</template>

<script lang="ts">
import { Line } from '@antv/g2plot'
import { nextTick, onMounted, ref } from 'vue'
export default {
  name: 'Line',
  setup () {
    const loading = ref(false)
    const container = ref<HTMLElement | null>(null)

    onMounted(async () => {
      loading.value = true
      const res = await fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      const data = await res.json()
      loading.value = false
      nextTick(() => {
        if (!container.value) return
        const line = new Line(container.value, {
          data,
          padding: 'auto',
          xField: 'Date',
          yField: 'scales',
          xAxis: {
            type: 'timeCat',
            tickCount: 5
          }
        })
        line.render()
      })
    })

    return { loading, container }
  }
}
</script>

<style scoped lang="less">

</style>
