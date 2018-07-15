import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app';

__webpack_public_path__ = WEBPACK_PUBLIC_PATH;

Vue.use(VueRouter);

let router = new VueRouter({
	base: __dirname,
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('Pages/home')
		},

		{
			path: '/about',
			name: 'about',
			component: () => import('Pages/about')
		}
	]
});

new Vue(Vue.util.extend(
	{router}, App
)).$mount('#app');
