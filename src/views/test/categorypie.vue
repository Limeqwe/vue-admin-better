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
      console.log('numRanklist')
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
          let arr = []
          this.allData.forEach((item) => {
            arr.push({
              name: item.dataName,
              value: item.percentge,
            })
          })
          console.log('xData', xData)
          console.log('yData', yData)
          this.initEcharts(arr)
        })
      },
      initEcharts(arr) {
        // 基本柱状图
        const option = {
          title: {
            text: '          小说类型数量排行榜',
          },
          tooltip: {
            trigger: 'item',
          },
          legend: {
            orient: 'vertical',
            top: 50,
            left: 300,
          },
          series: [
            {
              name: '数量',
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
