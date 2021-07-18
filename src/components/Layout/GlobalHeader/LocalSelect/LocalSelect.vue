<template>
  <a-dropdown :trigger="['click']">
    <template #overlay>
      <a-menu :selectedKeys="selectedKeys" @click="toggleLocal">
        <a-menu-item v-for="l in options" :key="l.value">{{ l.label }}</a-menu-item>
      </a-menu>
    </template>
    <a-button size="small" style="width:80px;">{{ localName }}</a-button>
  </a-dropdown>
</template>

<script lang="ts">
/**
 * @description 多语言下拉
 * @author AimerFan
 * @since 2021/07/17
*/
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store'
import { TOGGLE_LOCAL } from '@/store/mutation-types'

export default defineComponent({
  name: 'LocalSelect',
  setup () {
    const store = useStore()
    const options = [
      { label: '简体中文', value: 'zh-CN' },
      { label: 'English', value: 'en' }
    ]
    const local = computed(() => store.state.app.local)
    const localName = computed(() => {
      return options.find(i => i.value === local.value)!.label
    })
    const selectedKeys = computed(() => [local.value])

    const toggleLocal = ({ key }: { key: string }) => {
      if (key !== local.value) {
        store.dispatch(TOGGLE_LOCAL, key)
      }
    }
    return {
      options,
      local,
      localName,
      selectedKeys,
      toggleLocal
    }
  }
})
</script>

<style scoped lang="less">

</style>
