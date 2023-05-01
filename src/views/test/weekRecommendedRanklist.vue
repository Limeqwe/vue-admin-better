<template>
  <div id="mychart"></div>
</template>

<script>
  import * as echarts from 'echarts'
  import { postPieInformation } from '../../api/betaApi'
  export default {
    data() {
      return {
        param: {
          pieName: '字数排行榜',
          dataOrigin: '6',
        },
        allData: {},
        myChartStyle: { float: 'left', width: '100%', height: '400px' }, //图表样式
      }
    },
    created() {
      this.param.pieName = this.$route.query.value
      this.param.dataOrigin = this.$route.query.id
      console.log('weekRecommendedRanklist')
      console.log('accept:', this.param)
    },
    mounted() {
      this.upData()
    },
    methods: {
      upData() {
        postPieInformation(this.param).then((res) => {
          console.log('成功,res.data.data = ', res.data.data)
          this.allData = res.data.data
          const xData = this.allData.map((item) => {
            return item.dataName
          })
          const yData = this.allData.map((item) => {
            return item.percentge
          })
          console.log('xData', xData)
          console.log('yData', yData)
          this.initEcharts(xData, yData)
        })
      },
      initEcharts(xData, yData) {
        // 基本柱状图
        const option = {
          title: {
            text: '          周推荐排行榜',
          },
          xAxis: {
            scale: true,
          },
          yAxis: {
            data: xData,
          },
          series: [
            {
              type: 'bar', //形状为柱状图
              data: yData,
            },
          ],
        }
        const myChart = echarts.init(document.getElementById('mychart'))
        myChart.setOption(option)
        //随着屏幕大小调节图表
        window.addEventListener('resize', () => {
          myChart.resize()
        })
      },
    },
  }
</script>
<style scoped>
  #mychart {
    margin-top: 30px;
  }
</style>
