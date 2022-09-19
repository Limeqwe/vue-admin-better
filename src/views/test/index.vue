<template>
  <div class="test-container">
    <el-divider content-position="left">id:{{ value }}</el-divider>
  </div>
</template>
<script>
  import { getTest } from '../../api/test'
  export default {
    name: 'Test',
    data() {
      return {
        id: 2,
        value,
        show: true,
      }
    },
    created() {
      getTest(2).then((res) => {
        this.$notification.success({
          message: '成功',
          description: res.msg || `操作成功`,
        })
        this.id = res.value
        console.log('成功，res: ', res.value)
        this.value = res.value
      })
    },
    mounted() {},
    methods: {},
  }
</script>
