import Vue from 'vue'
import Router from 'vue-router'
import _ from 'lodash'
import publicRoutes from './public-routes'

Vue.use(Router)

const routes = _.flatten([publicRoutes])

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})
