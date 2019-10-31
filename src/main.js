import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

//按钮
import { Cell, CellGroup,Button } from 'vant';
Vue.use(Cell).use(CellGroup).use(Button);

//轮播
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);

//布局
import { Row, Col } from 'vant';
Vue.use(Row).use(Col);

//九宫格
import { Grid, GridItem } from 'vant';
Vue.use(Grid).use(GridItem);

//搜索
import { Search } from 'vant';
Vue.use(Search);

//懒加载
import { Lazyload } from 'vant';
Vue.use(Lazyload);


Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
