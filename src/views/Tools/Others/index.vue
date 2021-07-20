<template>
  <div>
    <CheckableSelect v-model:value="value" :options="options" style="width: 120px"></CheckableSelect>
  </div>
</template>

<script lang="ts">
/**
 * @description 工具集
 * @author AimerFan
 * @since 2021/07/20
*/
import { defineComponent } from 'vue'
import CheckableSelect from '@/components/CheckableSelect'

export default defineComponent({
  name: 'index',
  components: {
    CheckableSelect
  },
  data () {
    return {
      options: [
        { label: 'label_1', value: 'value_1' },
        { label: 'label_2', value: 'value_2' }
      ],
      value: []
    }
  }
})
</script>

<style scoped lang="less">

</style>
