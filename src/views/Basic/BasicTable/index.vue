<template>
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
</template>
<script>
import { useRequest } from 'vue-request'
import axios from 'axios'
import { defineComponent, reactive } from 'vue'
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
      {
        text: 'Male',
        value: 'male'
      },
      {
        text: 'Female',
        value: 'female'
      }
    ],
    width: '20%'
  },
  {
    title: 'Email',
    dataIndex: 'email'
  }
]

const queryData = params => {
  return axios.get('https://randomuser.me/api', {
    params: params
  })
}

export default defineComponent({
  name: 'BasicForm',
  setup () {
    const pagination = reactive({
      total: 200
    })
    const { data: dataSource, run, loading } = useRequest(queryData, {
      defaultParams: [
        {
          results: 10
        }
      ],
      formatResult: res => res.data.results
    })

    const handleTableChange = (pag, filters, sorter) => {
      console.log(pag)
      Object.assign(pagination, pag)
      run({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters
      })
    }

    return {
      dataSource,
      pagination,
      loading,
      columns,
      handleTableChange
    }
  }
})
</script>
