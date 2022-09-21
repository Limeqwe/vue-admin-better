<template>
  <div class="test-container">
    <el-divider content-position="left">id:{{ value }}</el-divider>
  </div>
</template>
<script>
  import { getTest } from '../../api/test1'
  export default {
    name: 'Test',
    data() {
      return {
        id: '2',
        value: {},
        show: true,
      }
    },
    created() {
      console.log('调用前测试:', this.id)
      getTest(this.id)
        .then((res) => {
          this.$notification.success({
            message: '成功',
            description: res.msg || `操作成功`,
          })
          console.log('成功，res: ', res)
          this.value = res.value
        })
        .catch((e) => {
          this.$notification.error({
            message: '失败',
            description: e.msg || `操作失败`,
          })
          console.log('失败，res: ', res)
        })
      console.log('调用结束测试:', this.value)
    },
    mounted() {},
    methods: {},
  }
</script>
