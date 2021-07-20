<template>
  <span class="collapsed-switch-wrap" :title="collapsed ? t('expand') : t('close')" @click="changeCollapsed">
    <MenuUnfoldOutlined v-if="collapsed" class="icon" />
    <MenuFoldOutlined v-else class="icon" />
  </span>
</template>

<script lang="ts">
/**
 * @description 左侧菜单栏是否展开
 * @author AimerFan
 * @since 2021/03/21
*/
import { computed, defineComponent } from 'vue'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons-vue'
import { useStore } from '@/store'
import { TOGGLE_COLLAPSED } from '@/store/mutation-types'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'CollapsedSwitch',
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined
  },
  setup () {
    const store = useStore()
    const { t } = useI18n()
    const collapsed = computed(() => store.state.app.collapsed)
    const changeCollapsed = () => {
      const targetCollapsed = !collapsed.value
      store.dispatch(TOGGLE_COLLAPSED, targetCollapsed)
    }
    return { collapsed, changeCollapsed, t }
  }
})
</script>

<style scoped lang="less">
.collapsed-switch-wrap {
  padding: 0 24px;
  cursor: pointer;
  .icon {
    font-size: 18px;
  }
}
</style>
