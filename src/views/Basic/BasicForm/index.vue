<template>
  <a-card>
    <div class="mb-24">
      <a-steps :current="current">
        <a-step v-for="step in steps" :key="step.title" :title="step.title"></a-step>
      </a-steps>
    </div>

    <BasicForm ref="basicForm" v-show="current === 0"/>
    <RichEditor ref="richEditor" v-show="current === 1" class="mt-12"/>
    <Preview v-show="current === 2" :form-value="formValue" :rich-content="richContent"/>

    <div class="steps-action mt-12">
      <a-space>
        <a-button v-if="current > 0" @click="prev">上一步</a-button>
        <a-button v-if="current < steps.length - 1" type="primary" @click="next">下一步</a-button>
        <a-button v-if="current == steps.length - 1" type="primary">提交</a-button>
      </a-space>
    </div>
  </a-card>
</template>

<script lang="ts">
import BasicForm from './BasicForm.vue'
import Preview from './Preview.vue'

import { defineComponent, ref } from 'vue'
import RichEditor from '@/components/RichEditor'
import { FormState } from './index'

/**
 * @description 表单提交
 * @author AimerFan
 * @date 2021/02/08
*/
export default defineComponent({
  name: 'BasicTable',
  components: { BasicForm, RichEditor, Preview },
  setup () {
    const basicForm = ref()
    const richEditor = ref()
    const current = ref<number>(0)
    const formValue = ref<FormState>()
    const richContent = ref<string>('')

    const steps = [
      { title: '基本信息' },
      { title: '编辑内容' },
      { title: '预览效果' }
    ]
    const next = async () => {
      if (current.value === 0) {
        await basicForm.value.valide()
      }
      if (current.value === 1) {
        formValue.value = basicForm.value.getValue()
        richContent.value = richEditor.value.getHTML()
      }
      current.value++
    }
    const prev = () => current.value--
    return { basicForm, richEditor, current, steps, next, prev, richContent, formValue }
  }
})
</script>

<style scoped lang="less">
.steps-action {
  text-align: right;
}
</style>
