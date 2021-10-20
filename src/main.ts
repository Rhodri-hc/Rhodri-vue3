import { createApp } from 'vue'
import App from '@s/App.vue'
// 引入tailwind css
import '@s/theme/index.css'

import router from '@s/router/index'
import store from '@s/store/index'

createApp(App).use(router).use(store).mount('#app')
