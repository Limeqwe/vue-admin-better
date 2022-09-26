<template>
  <div class="test-container">
    <el-row>
      <router-link
        :to="{ path: '/pagetTest/accept', query: { sentValue: sentValue } }"
      >
        <el-button type="primary">跳转按钮1</el-button>
      </router-link>
      <el-button type="primary" @click="sent(sentValue)">跳转按钮2</el-button>
    </el-row>
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
        sentValue: '传递成功',
        restaurants: [],
        state1: '',
        state2: '',
        id: '2',
        param: {
          id: 4,
        },
        value: {},
        postValue: {},
      }
    },
    created() {
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
      sent(svalue) {
        svalue = '传递成功'
        this.$router.push({
          path: '/pagetTest/accept',
          query: { sentValue: svalue },
        })
      },
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
      mounted() {
        this.restaurants = this.loadAll()
      },
    },
  }
</script>
