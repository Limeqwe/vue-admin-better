<template>
  <div ref="seller_ref" class="home">
    <el-row :gutter="20">
      <el-col :span="24">
        <!-- <div id="chart" ref="chart" style="width: 100%; height: 400px"></div> -->
      </el-col>
      <!-- 其对应的逻辑写在script的methods方法中，并添加一个init()方法，记得改echarts对应图表的名字以及一些想要修改的代码 -->
    </el-row>
  </div>
</template>

<script>
  // 引入echarts,之前也需要下载安装echarts
  import * as echarts from 'echarts'
  import { getList } from '../../api/testApi'
  export default {
    name: 'Home',
    data() {
      return {
        allData: {},
        listName: '热度排行榜',
        chartInstance: null,
      }
    },
    //  添加生命周期——钩子函数 加载init()方法
    // 在生命周期中实例化echarts对象（确保dom元素已经挂载到页面中）可以加一个nextTick
    mounted() {
      this.initChart()
      this.getData()
    },
    // 基于准备好的dom，初始化echarts实例
    //  因为我的echarts在main.js入口文件里写，所以这里要用this代表Vue对象，并引用$echarts，属性，初始化echarts实例
    created() {
      // var that = this
      // getList(this.listName).then((res) => {
      //   console.log('成功,res.data.data', res.data.data)
      //   that.postValue = res.data.data
      // })
    },
    methods: {
      initChart() {
        this.chartInstance = this.$echarts.init(this.$refs.seller_ref)
      },

      async getData() {
        var that = this
        getList(this.listName).then((res) => {
          console.log('成功,res.data.data = ', res.data.data)
          that.allData = res.data.data
          that.updateChart()
        })
      },
      updateChart() {
        const listName = this.allData.map((item) => {
          return item.bookName
        })
        const information = this.allData.map((item) => {
          console.log(item.Information)
          return item.Information
        })
        const option = {
          title: {
            text: '热度排行榜',
          },
          xAxis: {
            type: 'category',
            data: listName,
          },
          yAxis: {
            type: 'value',
            // boundaryGap: [0.2, 0.2],
            // data: information,
          },
          series: [
            {
              type: 'bar',
              data: information,
              barWidth: 75,
            },
          ],
        }
        this.chartInstance.setOption(option)
      },
    },
    // init() {
    //   // 若是echarts只想在当前页面引用，可以直接引入，然后修改即可！
    //   var myChart = echarts.init(document.getElementById('chart'))
    //   // 以下全局，我引入echarts属性（若是多个页面需要引入echarts的话，一定要在main.js中引入
    //   // var myChart = this.$echarts.init(this.$refs.chart);
    //   // 指定图表的配置项和数据
    //   var option = {
    //     xAxis: {
    //       type: 'category',
    //       data: this.postValue.bookName,
    //     },
    //     yAxis: {
    //       type: 'value',
    //     },
    //     series: [
    //       {
    //         data: this.postValue.Information,
    //         type: 'line',
    //       },
    //     ],
    //   }
    //   // 使用刚指定的配置项和数据显示图表。
    //   myChart.setOption(option)
    // },
    // },
    // components: {
    //   HelloWorld
    // }
  }
</script>

<style>
  .el-row {
    margin-bottom: 10px;
  }
  last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
</style>
