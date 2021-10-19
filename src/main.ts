import { createApp } from 'vue'
import App from '@s/App.vue'

import router from '@s/router/index'
import store from '@s/store/index'

createApp(App).use(router).use(store).mount('#app')
