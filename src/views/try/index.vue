<template>
  <div ref="seller_ref" class="home">
    <!-- 响应式布局+一般布局-->
    <!-- 现需要循环展示出script打开的多张图片地址，使用v-for  gutter代表图表之间的间隔-->
    <el-row :gutter="20">
      <!-- 引入图表，并进行响应式布局 -->
      <!-- 较好的init方式，采用ref方式，而非原生的document.getElementById -->
      <el-col :span="24">
        <div id="chart" ref="chart" style="width: 100%; height: 400px"></div>
      </el-col>
      <!-- 其对应的逻辑写在script的methods方法中，并添加一个init()方法，记得改echarts对应图表的名字以及一些想要修改的代码 -->
    </el-row>
    <div><el-button type="text" @click="sure">文字按钮</el-button></div>
  </div>
</template>
<script>
  import * as echarts from 'echarts'
  import { getList } from '../../api/testApi'
  export default {
    data() {
      return {
        // postValue: {},
        listName: '热度排行榜',
        chartInstance: null,
        allData: [],
      }
    },
    mounted() {
      this.initChart()
      this.getData()
    },
    created() {
      // var that = this
      // getList(this.listName).then((res) => {
      //   console.log('成功,res.data.data', res.data.data)
      //   that.postValue = res.data.data
      // })
    },
    methods: {
      sure() {
        console.log(this.allData)
      },
      initChart() {
        this.chartInstance = this.$echarts.init(this.$refs.seller_ref)
      },
      async getData() {
        // const { data: res } = await this.$http.get('seller')
        var that = this
        getList(this.listName).then((res) => {
          console.log('成功,res.data.data', res.data.data)
          // that.postValue = res.data.data
          that.allData = res.data.data
          that.updateChart()
        })
      },
      updateChart() {
        // 循环遍历出x轴的name
        // console.log(this.allData.get('bookName'))
        const sellerName = this.allData.map((item) => {
          // console.log(item.bookName)
          return item.bookName
        })
        const sellerValue = this.allData.map((item) => {
          // console.log(item.Information)
          return item.Information
        })
        const option = {
          title: {
            text: '热度排行榜',
          },
          xAxis: {
            type: 'value',
          },
          yAxis: {
            type: 'category',
            data: sellerName,
          },
          tooltip: {
            // 坐标轴触发
            trigger: 'axis',
            axisPointer: {
              // 鼠标移动到柱状图上，显示为交叉线，
              type: 'cross',
              label: {
                backgroundColor: '#6a7985',
              },
            },
          },
          series: [
            {
              type: 'bar',
              data: sellerValue,
            },
          ],
        }
        this.chartInstance.setOption(option)
      },
    },
  }
</script>

<style>
  .el-row {
    margin-bottom: 20px;
  }
  last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
</style>
