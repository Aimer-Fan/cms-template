
<template>
  <div>
    <Cards class="mb-24" />
    <Line />
    <a-row class="mt-24" :gutter="24">
      <a-col :xs="24" :sm="12"><Column /></a-col>
      <a-col :xs="24" :sm="12"><Pie /></a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Cards from './Cards.vue'
import Line from './Line.vue'
import Column from './Column.vue'
import Pie from './Pie.vue'

export default defineComponent({
  name: 'Dashboard',
  components: { Cards, Line, Column, Pie }
})
</script>
