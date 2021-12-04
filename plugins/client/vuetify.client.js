import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify, {
  VIcon,
  VBtn,
  VSelect,
  VNavigationDrawer,
  VSlider,
  VApp,
  VAppBar,
  VContainer,
  VProgressCircular
} from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  components: {
    VIcon,
    VBtn,
    VApp,
    VAppBar,
    VContainer,
    VProgressCircular,
    VSelect,
    VNavigationDrawer,
    VSlider,
  },
  icons: {
    iconfont: 'fa',
  },
  options: {
    minifyTheme (css) {
      return css.replace(/[\s|\r\n|\r|\n]/g, '')
    }
  }
})