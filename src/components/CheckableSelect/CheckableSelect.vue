<script lang="tsx">
/**
 * @description 带全选的下拉框
 * @author AimerFan
 * @since 2021/07/20
*/
import { defineComponent, PropType, VNode } from 'vue'
import { Select, Checkbox } from 'ant-design-vue'

export default defineComponent({
  name: 'CheckableSelect',
  props: {
    value: { type: Array as PropType<Array<string>>, default: undefined },
    options: { type: Array, default: () => [] }
  },
  setup (props, { attrs, emit }) {
    const dropdownRender = ({ menuNode }: { menuNode: VNode }) => {
      console.log(menuNode)
      return (
        <div>
          <div>
            <Checkbox checked={false}></Checkbox>
            <span>全选</span>
          </div>
          {
            props.options.map((option: any) => (
              <div
                onClick={() => {
                  const index = props.value?.findIndex(item => item === option.value)
                  if (typeof index === 'number' && index > 0) {
                    props.value!.splice(index, 1, option.value)
                  } else {
                    if (props.value && props.value.length) {
                      props.value!.push(option.value)
                    } else {
                      emit('update:value', [option.value])
                    }
                  }
                }}
              >
                <Checkbox checked={props.value?.includes(option.value)}></Checkbox>
                <span>{ option.label }</span>
              </div>
            ))
          }
        </div>
      )
    }

    return () => (
      <Select
        {...attrs}
        {...props}
        dropdownRender={dropdownRender}
        mode="multiple"
      ></Select>
    )
  }
})
</script>

<style scoped lang="less">

</style>
