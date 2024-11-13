import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createWebHistory } from 'vue-router';
import createRouter from './pages/routes.js';
import './style.css';
import App from './App.vue';

const pinia = createPinia();
const router = createRouter(createWebHistory());

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount('#app');