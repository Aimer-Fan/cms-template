<template>
  <a-form :model="form" ref="formRef" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="Activity name" name="name">
      <a-input v-model:value="form.name" />
    </a-form-item>
    <a-form-item label="Activity zone">
      <a-select v-model:value="form.region" placeholder="please select your zone">
        <a-select-option value="shanghai">
          Zone one
        </a-select-option>
        <a-select-option value="beijing">
          Zone two
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="Activity time">
      <a-date-picker
        v-model:value="form.date1"
        show-time
        type="date"
        placeholder="Pick a date"
        style="width: 100%;"
      />
    </a-form-item>
    <a-form-item label="Instant delivery">
      <a-switch v-model:checked="form.delivery" />
    </a-form-item>
    <a-form-item label="Activity type">
      <a-checkbox-group v-model:value="form.type">
        <a-checkbox value="1" name="type">
          Online
        </a-checkbox>
        <a-checkbox value="2" name="type">
          Promotion
        </a-checkbox>
        <a-checkbox value="3" name="type">
          Offline
        </a-checkbox>
      </a-checkbox-group>
    </a-form-item>
    <a-form-item label="Resources">
      <a-radio-group v-model:value="form.resource">
        <a-radio value="1">
          Sponsor
        </a-radio>
        <a-radio value="2">
          Venue
        </a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="Activity form">
      <a-input v-model:value="form.desc" type="textarea" />
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
/**
 * @description 基本信息表单
 * @author AimerFan
 * @date 2021/02/08
*/
import { defineComponent, reactive, ref, UnwrapRef } from 'vue'
import { useStore } from '@/store'
import { FormState } from './index'

/**
 * @description 基本信息
 * @author AimerFan
 * @date 2021/02/08
*/
export default defineComponent({
  name: 'BasicForm',
  setup () {
    const formRef = ref()
    const form: UnwrapRef<FormState> = reactive({
      name: '',
      region: undefined,
      date1: undefined,
      delivery: false,
      type: [],
      resource: '',
      desc: ''
    })

    const rules = {
      name: { required: true, message: 'Please input Activity name', trigger: 'blur' }
    }

    const valide = async () => {
      await formRef.value.validate()
    }

    const getValue = (): FormState => {
      return form
    }

    return { form, rules, formRef, valide, getValue }
  },
  computed: {
    labelCol () {
      const store = useStore()
      const isMobile = store.getters.device === 'mobile'
      return isMobile ? { span: 24 } : { span: 4 }
    },
    wrapperCol () {
      const store = useStore()
      const isMobile = store.getters.device === 'mobile'
      return isMobile ? { span: 24 } : { span: 14 }
    }
  }
})
</script>
