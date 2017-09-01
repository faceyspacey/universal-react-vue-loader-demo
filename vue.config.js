import Vue from 'react-vue'
import Vuex from 'vuex'
import createStore from './src/createVuexStore'

Vue.use(Vuex)

// you gotta do this because the Vue object isn't a constructor that can be used
// with `new` as in a standard Vue app
const StorePlugin = {
  install(Vue) {
    Vue.prototype.$store = createStore()
  }
}

Vue.use(StorePlugin)

export default Vue
