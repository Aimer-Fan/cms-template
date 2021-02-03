<template>
  <div class="bgw pd-12" >
    <a-steps :current="current" class="mb-24">
      <a-step v-for="step in steps" :key="step.title" :title="step.title"></a-step>
    </a-steps>

    <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="Activity name">
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

    <div class="steps-action">
      <a-button v-if="current > 0" class="mr-12" @click="prev">
        上一步
      </a-button>
      <a-button v-if="current < steps.length - 1" type="primary" @click="next">
        下一步
      </a-button>
      <a-button
        v-if="current == steps.length - 1"
        type="primary"
      >
        提交
      </a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'BasicTable',
  data () {
    return {
      current: 0,
      steps: [
        { title: '基本信息' },
        { title: '编辑内容' },
        { title: '预览效果' }
      ],
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: '',
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }

    }
  },
  methods: {
    next () {
      this.current++
    },
    prev () {
      this.current--
    }
  }
})
</script>

<style scoped lang="less">
.steps-action {
  text-align: right;
}
</style>
