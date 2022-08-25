require('./bootstrap');
import vue from 'vue'
window.Vue = vue;

import App from './components/App';

// Import axios
import VueAxios from 'vue-axios';
import axios from 'axios';

// Import y config vue router
import VueRouter from 'vue-router';
import { routes } from './routes';
import Vue from 'vue';
Vue.use(VueRouter);
Vue.use(VueAxios, axios);

// window.Vue = require('vue').default;

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const app = new Vue({
    el: '#app',
    routes: routes,
    render: h => h(App)
});
