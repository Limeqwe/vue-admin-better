<template>
  <div class="test-container">
    <el-divider content-position="left">id:{{ value }}</el-divider>
    <el-button type="primary" @click="get(id)">主要按钮</el-button>
  </div>
</template>
<script>
  // import getTest from '@/api/test'
  import { getTest } from '../../api/test'
  export default {
    name: 'Test',
    data() {
      return {
        id: '2',
        value1: {},
        value: {},
        show: true,
      }
    },
    created() {
      console.log('调用前测试:', this.id)
      var that = this
      getTest(this.id).then((res) => {
        console.log('成功，res: ', res)
        console.log('成功，res: ', res)
        that.value = res.data.data
        that.value1 = res.data
        // this.$notification.success({
        //   message: '成功',
        //   description: res.msg || `操作成功`,
        // })
      })
      // .catch((err) => {
      // this.$notification.error({
      //   message: '失败',
      //   description: err.msg || `操作失败`,
      // })
      // })
      // .catch((error) => {
      // console.log('回调测试:', error)
      // that.$notification.error({
      //   message: '失败',
      //   description: error.msg || `操作失败`,
      // })
      //   console.log('失败，res: ', res)
      // })
      console.log('调用结束测试:', that.value, this.value1)
      // get(this.id)
    },
    methods: {
      get(id) {
        var that = this
        getTest(id).then((res) => {
          console.log('成功，res: ', res)
          that.value = res
          that.value1 = res.data.data.data
          this.$notification.success({
            message: '成功',
            description: res.msg || `操作成功`,
          })
          console.log('成功，res: ', res)
        })
        // .catch((error) => {
        // console.log('回调测试:', error)
        //   this.$notification.error({
        //     message: '失败',
        //     description: err.msg || `操作失败`,
        //   })
        // })
        console.log('调用结束测试:', that.value, this.value1)
        // catch((error) => {
        //   this.$notification.error({
        //     message: '失败',
        //     description: error.msg || `操作失败`,
        //   })
        //   console.log('失败，res: ', res)
        // })
      },
    },
  }
</script>
