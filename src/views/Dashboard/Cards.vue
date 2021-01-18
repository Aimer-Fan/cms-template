<template>
  <a-row :gutter="16">
    <a-col :xs="24" :sm="12" :md="6">
      <a-card :loading="loading">
        <a-statistic
          title="Active Users"
          :value="activeUsers.value"
        />
      </a-card>
    </a-col>
    <a-col :xs="24" :sm="12" :md="6">
      <a-card :loading="loading">
        <a-statistic
          title="Account Balance (CNY)"
          :value="accountBalance.value"
          :precision="2"
        />
      </a-card>
    </a-col>
    <a-col :xs="24" :sm="12" :md="6">
      <a-card :loading="loading">
        <a-statistic
          title="Idle"
          :value="9.3"
          :precision="2"
          suffix="%"
          :value-style="{ color: colorMap[feedback.status] }"
        >
          <template #prefix>
            <ArrowUpOutlined v-if="feedback.status === 'up'"/>
            <ArrowDownOutlined v-if="feedback.status === 'down'"/>
          </template>
        </a-statistic>
      </a-card>
    </a-col>
    <a-col :xs="24" :sm="12" :md="6">
      <a-card :loading="loading">
        <a-statistic
          title="Idle"
          :value="idle.value"
          :precision="2"
          suffix="%"
          :value-style="{ color: colorMap[idle.status] }"
        >
          <template #prefix>
            <ArrowUpOutlined v-if="idle.status === 'up'"/>
            <ArrowDownOutlined v-if="idle.status === 'down'"/>
          </template>
        </a-statistic>
      </a-card>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons-vue'

import { GetCardsData } from '@/api/dashboard'

const colorMap = {
  up: '#3f8600',
  down: '#cf1322'
}

export default defineComponent({
  name: 'Cards',
  components: {
    ArrowUpOutlined,
    ArrowDownOutlined
  },
  setup () {
    const loading = ref<boolean>(true)
    const feedback = ref({})
    const activeUsers = ref({})
    const accountBalance = ref({})
    const idle = ref({})
    onMounted(async () => {
      loading.value = true
      const { data } = await GetCardsData()
      activeUsers.value = data.activeUsers
      accountBalance.value = data.accountBalance
      feedback.value = data.feedback
      idle.value = data.idle
      loading.value = false
    })
    return { loading, feedback, activeUsers, accountBalance, idle, colorMap }
  }
})
</script>

<style scoped lang="less">

</style>
