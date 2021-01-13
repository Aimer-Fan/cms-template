<template>
  <div>
    <div id="chartDom" ref="chartDom"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { GetLineData } from '@/api/dashboard'
import { Line } from '@antv/g2plot'
import DataSet from '@antv/data-set'

export default defineComponent({
  name: 'Dashboard',
  async mounted () {
    const { data: originData } = await GetLineData()
    const dv = new DataSet.DataView().source(originData)
    dv.transform({
      type: 'fold',
      fields: ['USA', 'California', 'BA9C', 'Marin'], // 展开字段集
      key: 'series',
      value: 'value'
    })
    const data = dv.rows.map((d) => ({
      ...d,
      value: d.value ? Number(d.value) : d.value
    }))
    const chartDom = document.getElementById('chartDom')
    if (!chartDom) return
    const line = new Line(chartDom, {
      data,
      autoFit: true,
      xField: 'Date',
      yField: 'value',
      seriesField: 'series',
      xAxis: {
        type: 'cat',
        label: {
          autoRotate: false,
          formatter: (v) => {
            return v.split('/').reverse().join('-')
          }
        }
      },
      yAxis: {
        grid: {
          line: {
            style: {
              lineWidth: 0.5
            }
          }
        }
      },
      meta: {
        Date: {
          range: [0.04, 0.96]
        }
      },
      point: {
        shape: 'circle',
        size: 2,
        style: () => {
          return {
            fillOpacity: 0,
            stroke: 'transparent'
          }
        }
      },
      appendPadding: [0, 0, 0, 0],
      legend: false,
      smooth: true,
      lineStyle: {
        lineWidth: 1.5
      },
      tooltip: {
        showMarkers: false,
        follow: false,
        position: 'top',
        customContent: () => ''
      },
      theme: {
        geometries: {
          point: {
            circle: {
              active: {
                style: {
                  r: 4,
                  fillOpacity: 1,
                  stroke: '#000',
                  lineWidth: 1
                }
              }
            }
          }
        }
      },
      interactions: [{ type: 'marker-active' }, { type: 'brush' }]
    })
    console.log(line)
    line.render()
  }
})
</script>

<style scoped lang="less">

</style>
