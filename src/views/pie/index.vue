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
          pieName: '书籍便签饼状图',
          dataOrigin: '0',
        },
        chartInstance: null,
      }
    },
    //  添加生命周期——钩子函数 加载init()方法
    // 在生命周期中实例化echarts对象（确保dom元素已经挂载到页面中）可以加一个nextTick
    mounted() {
      this.initChart()
      this.getData()
    },
    methods: {
      initChart() {
        this.chartInstance = this.$echarts.init(this.$refs.seller_ref)
      },

      async getData() {
        var that = this
        postPieInformation(this.param).then((res) => {
          // console.log('成功,res.data.data = ', res.data.data)
          that.allData = res.data.data
          that.updateChart()
        })
      },

      updateChart() {
        let arr = []
        this.allData.forEach((item) => {
          arr.push({
            name: item.dataName, //将数组的conut值赋给value
            value: item.percentge, //将数组的name值赋给name
          })
        })
        console.log(arr)
        const option = {
          title: {
            text: '书籍便签饼状图',
            left: 'center',
          },
          tooltip: {
            trigger: 'item',
          },
          legend: {
            orient: 'vertical',
            left: 125,
          },
          series: [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2,
              },
              label: {
                show: false,
                position: 'center',
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '40',
                  fontWeight: 'bold',
                },
              },
              labelLine: {
                show: false,
              },
              data: arr,
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
    margin-bottom: 20px;
  }
  last-child {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
</style>
