import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createWebHistory } from 'vue-router';
import  createRouter from './pages/routes.js';
import errorHandler from './lib/errorHandler';
import './style.css';
import App from './App.vue';

const pinia = createPinia();
const router = createRouter(createWebHistory());
const app = createApp(App);

app.config.globalProperties.$env = import.meta.env;
app.use(pinia);
app.use(router);
errorHandler(app);
app.mount('#app');