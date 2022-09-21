<template>
  <div class="home">
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
  </div>
</template>

<script>
  // 引入echarts,之前也需要下载安装echarts
  import * as echarts from 'echarts'
  export default {
    name: 'Home',
    data() {
      return {
        // 必须要加上require来解析当前的图片地址
        // items: [
        //   require('../assets/1.webp'),
        //   require('../assets/2.webp'),
        //   require('../assets/3.webp'),
        //   require('../assets/4.webp'),
        // ],
      }
    },
    //  添加生命周期——钩子函数 加载init()方法
    // 在生命周期中实例化echarts对象（确保dom元素已经挂载到页面中）可以加一个nextTick
    mounted() {
      this.$nextTick(function () {
        this.init()
      })
    },
    // 基于准备好的dom，初始化echarts实例
    //  因为我的echarts在main.js入口文件里写，所以这里要用this代表Vue对象，并引用$echarts，属性，初始化echarts实例
    methods: {
      init() {
        // 若是echarts只想在当前页面引用，可以直接引入，然后修改即可！
        var myChart = echarts.init(document.getElementById('chart'))
        // 以下全局，我引入echarts属性（若是多个页面需要引入echarts的话，一定要在main.js中引入
        // var myChart = this.$echarts.init(this.$refs.chart);
        // 指定图表的配置项和数据
        var option = {
          xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {},
          series: [
            {
              type: 'bar',
              data: [23, 24, 18, 25, 27, 28, 25],
            },
            {
              type: 'bar',
              data: [26, 24, 18, 22, 23, 20, 27],
            },
          ],
        }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option)
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
