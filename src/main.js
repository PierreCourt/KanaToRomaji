import { createApp } from 'vue'
import App from './App.vue'



//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


let app = createApp(App);
app.config.devtools = true;
// Install BootstrapVue
/*app.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
app.use(IconsPlugin)*/

app.mount('#app')
