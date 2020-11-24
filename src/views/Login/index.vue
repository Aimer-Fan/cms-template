<template>
  <div class="login-container">
    <h1 class="login-form-title">Login Form</h1>
    <a-form
      :model="ruleForm"
      v-bind="layout"
      class="login-form"
    >
      <a-form-item label="username">
        <a-input v-model:value="ruleForm.username" placeholder="input username">
          <template #prefix><UserOutlined style="color:rgba(0,0,0,.25)"/></template>
        </a-input>
      </a-form-item>
      <a-form-item label="password">
        <a-input-password v-model:value="ruleForm.password" placeholder="input password">
          <template #prefix><LockOutlined style="color:rgba(0,0,0,.25)"/></template>
        </a-input-password>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 6 }">
        <a-button type="primary" @click="login" :loading="loading">
          Login in
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { useStore } from 'vuex'
import router from '@/router'
import { notification } from 'ant-design-vue'

interface LoginForm {
  username: string;
  password: string;
}

export default defineComponent({
  name: 'Login',
  components: { UserOutlined, LockOutlined },
  setup () {
    const store = useStore()
    const Login = (params: LoginForm) => store.dispatch('Login', params)
    const ruleForm = ref<LoginForm>({
      username: 'admin',
      password: 'admin'
    })
    const layout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    }
    const loading = ref<boolean>(false)
    const login = async () => {
      try {
        loading.value = true
        const params = { username: ruleForm.value.username, password: ruleForm.value.password }
        await Login(params)
        notification.success({ message: 'Welcome', description: 'Login Successful!' })
        router.push('/dashboard')
      } finally {
        loading.value = false
      }
    }
    return { ruleForm, layout, login, loading }
  }
})
</script>

<style lang="less" scoped>
.login-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .login-form-title {
    font-size: 24px;
    margin-bottom: 24px;
    font-weight: 550;
  }
  .login-form {
    width: 500px;
    margin-bottom: 140px;
  }
}
</style>
