<template>
  <a-menu
    mode="inline"
  >
    <a-sub-menu title="Sub" key="sub1">
      <a-menu-item key="1">Option 1</a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Sider'
})
</script>
