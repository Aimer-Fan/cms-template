<template>
  <a-layout>
      <a-layout-sider theme="light">
        <Sider />
      </a-layout-sider>
      <a-layout>
        <a-layout-header class="cms-global-header">
          <GlobalHeader />
        </a-layout-header>
        <a-layout-content>
          <router-view class="main-layout"></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GlobalHeader from './GlobalHeader.vue'
import Sider from './Sider.vue'

export default defineComponent({
  name: 'Layout',
  components: { GlobalHeader, Sider }
})
</script>

<style lang="less" scoped>
.cms-global-header {
  padding: 0 30px;
  background: #ffffff;
  box-shadow: 0 1px 4px #eeeeee;
}
</style>
