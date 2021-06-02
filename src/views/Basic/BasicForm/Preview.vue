<template>
  <a-descriptions
    title="Responsive Descriptions"
    bordered
    :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }"
  >
    <a-descriptions-item label="Product">{{ formValue.name }}</a-descriptions-item>
    <a-descriptions-item label="Billing">{{ formValue.region }}</a-descriptions-item>
    <a-descriptions-item label="Time">{{ formValue.date1 }}</a-descriptions-item>
    <a-descriptions-item label="Amount">{{ formValue.delivery }}</a-descriptions-item>
    <a-descriptions-item label="Discount">$20.00</a-descriptions-item>
    <a-descriptions-item label="Official">$60.00</a-descriptions-item>
    <a-descriptions-item label="Config Info">
      Data disk type: MongoDB
      <br />
      Database version: 3.4
      <br />
      Package: dds.mongo.mid
      <br />
      Storage space: 10 GB
      <br />
      Replication factor: 3
      <br />
      Region: East China 1
    </a-descriptions-item>
  </a-descriptions>
</template>

<script lang="ts">
/**
 * @description 预览界面
 * @author AimerFan
 * @date 2021/02/10
*/
import { defineComponent, PropType } from 'vue'
import { FormState } from './index'

export default defineComponent({
  name: 'Preview',
  props: {
    richContent: { type: String, default: '' },
    formValue: { type: Object as PropType<FormState>, default: () => ({}) }
  }
})
</script>

<style scoped lang="less">

</style>
