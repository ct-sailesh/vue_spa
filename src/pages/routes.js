// src/pages/routes.js
import { createRouter } from 'vue-router';
import Home from './home/Home.vue';
import Listings from './listings/Listings.vue';
import About from './about/About.vue';
import NotFound from './notfound/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/listings',
    name: 'Listings',
    component: Listings
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/:pathMatch(.*)*', // Catch-all for undefined routes
    name: 'NotFound',
    component: NotFound,
  },
];

export default function (history) {
  return createRouter({
    history,
    routes,
  });
}
