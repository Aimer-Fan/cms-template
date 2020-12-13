<template>
  <div class="execption-wrap">
    <div>
      <h1 class="title">{{ config.title }}</h1>
      <div class="desc">{{ config.desc }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Error',
  props: {
    config: { type: Object }
  }
})
</script>

<style scoped lang="less">
.execption-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-bottom: 48px;
  .title {
    font-size: 48px;
    letter-spacing: 0.1em;
    margin-right: 100px;
  }
}
</style>
