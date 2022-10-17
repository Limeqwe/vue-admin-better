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
  import { postPieInformation } from '../../api/testApi'
  export default {
    name: 'Home',
    data() {
      return {
        allData: {},
        param: {
          pieName: '小说作者柱状图',
          dataOrigin: 0,
        },
        chartInstance: null,
      }
    },
    //  添加生命周期——钩子函数 加载init()方法
    // 在生命周期中实例化echarts对象（确保dom元素已经挂载到页面中）可以加一个nextTick
    created() {
      // this.param.pieName = this.$route.query.value
      // this.param.dataOrigin = this.$route.query.id
      // console.log('accept:', this.param)
    },
    mounted() {
      this.initChart()
      this.getData()
    },
    methods: {
      initChart() {
        this.chartInstance = this.$echarts.init(this.$refs.seller_ref)
      },

      async getData() {
        this.param.pieName = this.$route.query.value
        this.param.dataOrigin = this.$route.query.id
        // this.param.pieName = '周推荐数排行榜'
        // this.param.dataOrigin = 1
        // this.param.dataOrigin = 0
        // this.param.pieName = '字数排行榜'
        console.log('accept:', this.param)
        var that = this
        postPieInformation(this.param).then((res) => {
          console.log('成功,res.data.data = ', res.data.data)
          that.allData = res.data.data
          that.updateChart()
        })
      },
      updateChart() {
        const listName = this.allData.map((item) => {
          return item.dataName
        })
        const information = this.allData.map((item) => {
          return item.percentge
        })
        console.log(listName)
        console.log(information)
        const option = {
          tile: {
            text: '小说作者柱状图',
            left: 'center',
          },
          xAxis: {
            data: listName,
          },
          yAxis: {},
          series: [
            {
              type: 'bar',
              data: information,
              barWidth: 30,
            },
          ],
        }
        this.chartInstance.setOption(option)
      },
    },
    // components: {
    //   HelloWorld
    // }
  }
</script>

<style>
  .el-row {
    margin-bottom: 40px;
  }
  last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
</style>
