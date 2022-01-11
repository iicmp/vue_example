<template>
  <div id="app">

    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value1"
        @change="clickevent"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期">
      </el-date-picker>
    </div>

    <div id="main">
    </div>

  </div>

</template>

<script>
export default {
  data () {
    return {
      value1: ''
    }
  },
  methods: {
    clickevent () {
      alert('jflskd')
    }
  },
  mounted () {
    this.$nextTick(function () {
      const myChart = this.$echarts.init(document.getElementById('main'))
      myChart.setOption({
        title: {
          text: '2018年管线设施分类统计',
          top: 10,
          left: 10
        },
        legend: {
          top: 32,
          left: 'right',
          data: ['管线长度', '管点数量']
        },
        grid: {
          top: 60,
          right: 70,
          bottom: 30,
          left: 60
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}'
        },
        toolbox: {
          show: false,
          top: 10,
          right: 10,
          feature: {
            mark: { show: true },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        
        
        calculable: true,
        xAxis: [
          {
            axisLabel: { interval: 90 },
            type: 'category',
            data: ['2020/01/01', '2020/01/01', '2020/01/01', '2020/01/01', '2020/01/01', '2020/01/01', '2020/01/01', '2020/01/01', '2020/01/01', '2020/01/01', '2020/01/01', '2020/01/01', '2020/01/01', '2020/01/01', '2020/01/01', '2020/01/01']
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '管\n线\n长\n度\n︵\n公\n里\n︶',
            nameLocation: 'center',
            nameGap: 35,
            nameRotate: 0,
            nameTextStyle: {
              fontSize: 16
            },
            // 默认以千分位显示，不想用的可以在这加一段
            axisLabel: { // 调整左侧Y轴刻度， 直接按对应数据显示
              show: true,
              showMinLabel: true,
              showMaxLabel: true,
              formatter: function (value) {
                return value
              }
            }
          },
          {
            type: 'value',
            name: '管\n点\n数\n量\n︵\n个\n︶',
            nameLocation: 'center',
            nameGap: 50,
            nameRotate: 0,
            nameTextStyle: {
              fontSize: 16
            },
            //默认以千分位显示，不想用的可以在这加一段
            axisLabel: { // 调整左侧Y轴刻度， 直接按对应数据显示
              show: true,
              showMinLabel: true,
              showMaxLabel: true,
              formatter: function (value) {
                return value
              }
            }
          }
        ],
        series: [
          {
            name: '管线长度',
            type: 'bar',
            yAxisIndex: 0,
            data: [409.07, 187.48, 94.86, 161.11, 327.68, 355.9, 0.56, 49.86, 0.56, 0.56, 0.56, 0.56, 0.56, 0.56, 0.56, 0.56, 0.56, 0.56, 0.56, 0.56],
            // itemStyle : { normal: {label : {show: true}}},
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            }
          },
          {
            name: '管点数量',
            type: 'bar',
            yAxisIndex: 1,
            data: [18447, 7800, 2843, 6547, 15170, 26569, 506, 1873, 542, 542, 542, 542, 542, 542, 542, 542, 542, 542, 542, 542, 542, 542]
            // itemStyle : { normal: {label : {show: true}}},
            // markPoint: {
            //   data: [
            //     { type: 'max', name: '最大值' },
            //     { type: 'min', name: '最小值' }
            //   ]
            // }
          }
        ]

      })
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: SFProText-Medium, SFProText-Regular, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333333;
}
#main{
  border: 2px solid red;
  width: 600px;
  height: 600px;
}
</style>
