import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vueCountryRegionSelect from 'vue3-country-region-select'

const app = createApp(App)
app.use(router)
app.use(vueCountryRegionSelect)
app.mount('#app')
