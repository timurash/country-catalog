import { createRouter, createWebHashHistory } from 'vue-router';

const CountryCatalog = () => import('../components/CountryCatalog/CountryCatalog.vue');
const CountryPage = () => import('../components/CountryPage/CountryPage.vue');
const AboutPage = () => import('../components/AboutPage/AboutPage.vue');

const routes = [
  { path: '/', component: CountryCatalog },
  { path: '/country/:countryName', component: CountryPage },
  { path: '/about', component: AboutPage },
];

export default createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHashHistory(),
  routes,
});
