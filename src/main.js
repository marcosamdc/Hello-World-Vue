import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify moet hier geïmporteerd worden
import vuetify from './plugins/vuetify'

const app = createApp(App)

app.use(router)
app.use(vuetify)

app.mount('#app')
