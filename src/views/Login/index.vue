<template>
  <a-form
    name="custom-validation"
    ref="ruleForm"
    :model="ruleForm"
    v-bind="layout"
  >
    <a-form-item required has-feedback label="Username" name="username">
      <a-input v-model:value="ruleForm.username" autocomplete="off" />
    </a-form-item>
    <a-form-item has-feedback label="Password" name="password">
      <a-input v-model:value="ruleForm.password" type="password" autocomplete="off" />
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" html-type="submit">
        Submit
      </a-button>
      <a-button style="margin-left: 10px">
        Reset
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
const login = () => {
  const ruleForm = ref({
    username: '',
    password: ''
  })
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 14 }
  }
  return { ruleForm, layout }
}
export default defineComponent({
  name: 'Login',
  setup () {
    return { ...login() }
  }
})
</script>
