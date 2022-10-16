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
          dataset: {
            source: [
              ['score', 'amount', 'product'],
              [89.3, 58212, 'Matcha Latte'],
              [57.1, 78254, 'Milk Tea'],
              [74.4, 41032, 'Cheese Cocoa'],
              [50.1, 12755, 'Cheese Brownie'],
              [89.7, 20145, 'Matcha Cocoa'],
              [68.1, 79146, 'Tea'],
              [19.6, 91852, 'Orange Juice'],
              [10.6, 101852, 'Lemon Juice'],
              [32.7, 20112, 'Walnut Brownie'],
            ],
          },
          grid: { containLabel: true },
          xAxis: { name: 'amount' },
          yAxis: { type: 'category' },
          visualMap: {
            orient: 'horizontal',
            left: 'center',
            min: 10,
            max: 100,
            text: ['High Score', 'Low Score'],
            // Map the score column to color
            dimension: 0,
            inRange: {
              color: ['#65B581', '#FFCE34', '#FD665F'],
            },
          },
          series: [
            {
              type: 'bar',
              encode: {
                // Map the "amount" column to X axis.
                x: 'amount',
                // Map the "product" column to Y axis
                y: 'product',
              },
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
