import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import prismic from './prismic'

import './style.css'

createApp(App).use(router).use(prismic).mount('#app')
