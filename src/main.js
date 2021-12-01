import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import Todolist from './Todolist.vue'

// createApp(App).use(store).use(router).mount('#app')
createApp(Todolist).use(store).use(router).mount('#app')
// createApp(testing).use(store).use(router).mount('#app')
