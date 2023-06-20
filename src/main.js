import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import ToastPlugin from 'vue-toast-notification';

import 'aos/dist/aos.css';
import './css/style.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';

const app = createApp(App)
app.use(ToastPlugin);
app.use(router)
app.mount('#app')
