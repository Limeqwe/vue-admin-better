<template>
  <div class="test-container">
    <el-divider content-position="left">accept:{{ accept }}</el-divider>
    <el-divider content-position="left">get id:{{ value.id }}</el-divider>
    <el-divider content-position="left">post id:{{ postValue.id }}</el-divider>
    <el-button type="primary" @click="get(id)">主要按钮</el-button>
  </div>
</template>
<script>
  // import getTest from '@/api/test'
  import { getTest, postTest } from '../../api/testApi'
  export default {
    name: 'Test',
    data() {
      return {
        accept: '',
        id: '2',
        param: {
          id: 4,
        },
        value: {},
        postValue: {},
      }
    },
    created() {
      this.accept = this.$route.query.sentValue1
      console.log('accept:', this.accept)
      var that = this
      getTest(this.id).then((res) => {
        console.log('成功，res.data.data: ', res.data.data)
        that.value = res.data.data
      })
      postTest(this.param).then((res) => {
        console.log('成功，res.data.data: ', res.data.data)
        that.postValue = res.data.data
      })
    },
    methods: {
      get(id) {
        var that = this
        getTest(id).then((res) => {
          that.id = 3
          console.log('成功，res.data.data: ', res.data.data)
          that.value = res.data.data
        })
        postTest({ id }).then((res) => {
          console.log('成功，res.data.data: ', res.data.data)
          that.postValue = res.data.data
        })
      },
    },
  }
</script>
