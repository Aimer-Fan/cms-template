<template>
  <div class="flex-center-center" style="height:100%">
    <a-result status="500" title="500" sub-title="Sorry, the server is wrong.">
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
export default defineComponent({
  name: '500'
})
</script>
