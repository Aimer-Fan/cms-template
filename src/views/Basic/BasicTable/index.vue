<template>
  <a-card>
    <a-table
      :columns="columns"
      :row-key="record => record.login.uuid"
      :data-source="dataSource"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
    >
      <template #name="{ text }">{{ text.first }} {{ text.last }}</template>
    </a-table>
  </a-card>
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive, ref, UnwrapRef } from 'vue'
import { GetTableData } from '@/api/basic/basicTable'
import { TableState, TableStateFilters } from 'ant-design-vue/lib/table/interface'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    width: '20%',
    slots: {
      customRender: 'name'
    }
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' }
    ],
    width: '20%'
  },
  {
    title: 'Email',
    dataIndex: 'email'
  }
]

type Pagination = TableState['pagination']

type APIParams = {
  results: number;
  page?: number;
  sortField?: string;
  sortOrder?: number;
  [key: string]: any;
}

type APIResult = {
  results: {
    gender: 'female' | 'male';
    name: string;
    email: string;
  }[];
}
/**
 * @description 基本表格
 * @author AimerFan
 * @date 2021/02/18
*/
export default defineComponent({
  name: 'BasicForm',
  setup () {
    const pagination: UnwrapRef<Pagination> = reactive({ total: 200 })
    const dataSource = ref()
    const loading = ref(false)

    const bindTableData = async (params: APIParams) => {
      loading.value = true
      const { data } = await GetTableData<APIParams, APIResult>(params)
      loading.value = false
      dataSource.value = data.results
    }

    const handleTableChange = (pag: Pagination, filters: TableStateFilters, sorter: any) => {
      Object.assign(pagination, pag)
      bindTableData({
        results: pagination.pageSize!,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters
      })
    }

    onMounted(() => {
      bindTableData({ results: 10 })
    })

    return {
      pagination,
      dataSource,
      loading,
      columns,
      handleTableChange
    }
  }
})
</script>
