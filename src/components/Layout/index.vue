<template>
  <a-layout>
    <a-layout-sider v-if="!isMobile" theme="light" collapsible :trigger="null" :collapsed="collapsed">
      <div class="cms-global-logo">
        <router-link to="/">
          <img src="@/assets/logo.png" class="logo"/>
          <span class="ml-12 cms-global-title">CMS Template</span>
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
          <span class="ml-12 cms-global-title">CMS Template</span>
        </router-link>
      </div>
      <Sider/>
    </a-drawer>

    <a-layout theme="light">
      <a-layout-header class="cms-global-header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content>
        <router-view class="main-layout-content"></router-view>
      </a-layout-content>
    </a-layout>
    </a-layout>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import GlobalHeader from './GlobalHeader.vue'
import Sider from './Sider.vue'

export default defineComponent({
  name: 'Layout',
  components: { GlobalHeader, Sider },
  setup () {
    const store = useStore()
    const collapsed = computed(() => store.state.app.collapsed)
    const isMobile = computed(() => store.state.app.device === 'mobile')
    const toggleCollapsed = () => {
      store.dispatch('ToggleCollapsed', true)
    }
    return { isMobile, collapsed, toggleCollapsed }
  }
})
</script>

<style lang="less" scoped>
@import '~ant-design-vue/dist/antd.less';
.cms-global-logo {
  height: 60px;
  font-size: 18px;
  box-shadow: 0px 1px 4px #eeeeee;
  line-height: 60px;
  text-align: center;
  font-weight: 450;
  white-space: nowrap;
  overflow: hidden;
  .cms-global-title {
    color: @text-color;
  }
  .logo {
    transition: 0.2s margin;
    height: 50%;
  }
}
.cms-global-header {
  padding: 0 15px;
  background: #ffffff;
  box-shadow: 0 1px 4px #eeeeee;
}
.ant-layout-sider-collapsed {
  .logo{
    margin-left: 25px;
  }
  .cms-global-title {
    margin-left: 25px;
  }
}
</style>
