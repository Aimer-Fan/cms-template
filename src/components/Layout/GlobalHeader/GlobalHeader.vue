<template>
  <div class="global-header-wrap">
    <CollapsedSwitch />
    <div class="fr cms-header">
      <LocalSelect />
      <ThemeSwitch />
      <FullScreen />
      <UserInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LocalSelect from './LocalSelect'
import ThemeSwitch from './ThemeSwitch'
import CollapsedSwitch from './CollapsedSwitch'
import FullScreen from './FullScreen'
import UserInfo from './UserInfo'

/**
 * @description 标题栏
 * @author AimerFan
 * @date 2021/02/19
*/
export default defineComponent({
  name: 'GlobalHeader',
  components: {
    LocalSelect,
    ThemeSwitch,
    CollapsedSwitch,
    FullScreen,
    UserInfo
  }
})
</script>

<style scoped lang="less">
.icon {
  font-size: 18px;
}
.cms-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
}
.global-header-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
</style>
