<template>
  <span class="theme-switch-wrap" :title="theme === 'dark' ? t('defaultMode') : t('darkMode')" @click="changeTheme">
    <BulbOutlined v-if="theme === 'dark'" class="icon"/>
    <BulbFilled v-if="theme === 'light'" class="icon"/>
  </span>
</template>

<script lang="ts">
/**
 * @description 切换主题开关
 * @author AimerFan
 * @since 2021/03/20
*/
import {
  BulbOutlined,
  BulbFilled
} from '@ant-design/icons-vue'

import { useStore } from '@/store'
import { computed, defineComponent } from 'vue'
import { TOGGLE_APPLICATION_THEME } from '@/store/mutation-types'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'ThemeSwitch',
  components: {
    BulbOutlined,
    BulbFilled
  },
  setup () {
    const { t } = useI18n()
    const store = useStore()
    const theme = computed(() => store.getters.theme)
    const changeTheme = () => {
      const targetTheme = theme.value === 'dark' ? 'light' : 'dark'
      store.dispatch(TOGGLE_APPLICATION_THEME, targetTheme)
    }

    return { theme, changeTheme, t }
  }
})
</script>

<style scoped lang="less">
.theme-switch-wrap {
  padding: 0 6px;
  cursor: pointer;
  .icon {
    font-size: 18px;
  }
}
</style>
