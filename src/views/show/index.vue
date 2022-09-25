<template>
  <div>
    <el-button type="primary" @click="handle1">折线图</el-button>
    <el-button type="primary" @click="handle2">饼图</el-button>
    <el-button type="primary" @click="handle3">统计图</el-button>
    <el-button type="primary" @click="handle4">circle</el-button>
  </div>
</template>
<script>
  export default {
    methods: {
      handle1() {
        //  路径/home对应我在router目录下index.js中定义的path属性值
        this.$router.push({ path: '/bline' })
      },
      handle2() {
        //  路径/home对应我在router目录下index.js中定义的path属性值
        this.$router.push({ path: '/pie' })
      },
      handle3() {
        //  路径/home对应我在router目录下index.js中定义的path属性值
        this.$router.push({ path: '/histogram' })
      },
      handle4() {
        //  路径/home对应我在router目录下index.js中定义的path属性值
        this.$router.push({ path: '/circle' })
      },
    },
  }
</script>
