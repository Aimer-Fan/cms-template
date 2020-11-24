<template>
  <div>
    Dashboard
    <a-button @click="handleClick">Click Me</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'Dashboard',
  setup () {
    const store = useStore()
    const handleClick = () => {
      console.log(store)
    }
    return { handleClick }
  }
})
</script>

<style scoped lang="less">

</style>
