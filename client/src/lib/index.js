import Vue from 'vue'

import ajax from './ajax'
import svgIcon from './svgIcon'
import iView from './iview'
import echarts from 'echarts'
import iviewArea from './iviewArea'

export default {
  install(Vue) {
    Vue.use(ajax)
    Vue.use(svgIcon)
    Vue.use(iView)
    Vue.use(iviewArea)
    Vue.prototype.$echarts = echarts
  }
}