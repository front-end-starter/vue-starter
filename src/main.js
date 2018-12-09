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
			component: () => import(
				/* webpackChunkName: 'page-home' */
				'Pages/home'
			)
		},

		{
			path: '/about',
			name: 'about',
			component: () => import(
				/* webpackChunkName: 'page-about' */
				'Pages/about'
			)
		}
	]
});

new Vue(Vue.util.extend(
	{router}, App
)).$mount('#app');
