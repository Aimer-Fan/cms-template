<template>
  <a-config-provider :locale="locale">
    <a-spin :spinning="fullLoading" tip="Loading..." size="large" style="max-height:100vh;">
      <div class="main-layout" :class="device">
        <router-view />
      </div>
    </a-spin>
  </a-config-provider>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import deviceHock from '@/hocks/device'
import bindingLocalStorage from '@/hocks/bindingLocalStorage'
import { useStore } from '@/store'

import locale from 'ant-design-vue/es/locale/zh_CN'

/**
 * @description 全局 Loading
 * @author AimerFan
 * @date 2021/02/07
*/
function useFullLoading () {
  const store = useStore()
  const fullLoading = computed(() => store.getters.loading)
  return { fullLoading }
}

/**
 * @description 应用程序主入口
 * @author AimerFan
 * @date 2021/02/05
*/
export default defineComponent({
  name: 'App',
  setup () {
    bindingLocalStorage()
    return { ...deviceHock(), ...useFullLoading(), locale }
  }
})
</script>
