<template>
  <div class="flex-center-center" :style="{height: isHome ? '100vh' : '100%'}">
    <a-result status="404" title="404" sub-title="Sorry, the page you visited does not exist.">
      <template #extra>
        <router-link to="/">
          <a-button type="primary">
            Back Home
          </a-button>
        </router-link>
      </template>
    </a-result>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: '404',
  setup () {
    const router = useRouter()
    const current = router.currentRoute.value
    const isHome = current.path === '/404'
    return { isHome }
  }
})
</script>
