<template>
  <a-layout>
    <a-layout-sider
      v-if="!isMobile"
      theme="dark"
      collapsible
      :trigger="null"
      :collapsed="collapsed"
      :style="{ zIndex: 1, overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
    >
      <div class="cms-global-logo">
        <router-link to="/">
          <img src="@/assets/logo.png" class="logo"/>
          <span class="ml-12 cms-global-title">Admin Template</span>
        </router-link>
      </div>
      <Sider />
    </a-layout-sider>

    <a-drawer
      v-else
      :visible="!collapsed"
      placement="left"
      :closable="false"
      :bodyStyle="{ padding: 0 }"
      @close="toggleCollapsed"
    >
      <div class="cms-global-logo">
        <router-link to="/">
          <img src="@/assets/logo.png" class="logo"/>
          <span class="ml-12 cms-global-title-mobile">Admin Template</span>
        </router-link>
      </div>
      <Sider/>
    </a-drawer>

    <a-layout :theme="theme" class="cms-right-side" :class="{ 'collapsed': collapsed }">
      <a-layout-header class="cms-global-header" :style="{ position: 'fixed', zIndex: 1, right: 0, top: 0 }">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content :style="{ marginTop: '64px' }">
        <router-view class="main-layout-content"></router-view>
      </a-layout-content>
    </a-layout>
    </a-layout>
</template>

<script lang="ts">
import { TOGGLE_COLLAPSED } from '@/store/mutation-types'
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import GlobalHeader from './GlobalHeader'
import Sider from './Sider.vue'

export default defineComponent({
  name: 'Layout',
  components: { GlobalHeader, Sider },
  setup () {
    const store = useStore()
    const collapsed = computed(() => store.state.app.collapsed)
    const theme = computed(() => store.getters.theme)
    const isMobile = computed(() => store.state.app.device === 'mobile')
    const toggleCollapsed = () => {
      store.dispatch(TOGGLE_COLLAPSED, true)
    }
    return { isMobile, collapsed, theme, toggleCollapsed }
  }
})
</script>

<style lang="less" scoped>
@import './index.less';
</style>
