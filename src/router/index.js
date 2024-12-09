import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Snapshot from '../views/Snapshot.vue'
import Zone from '../views/Zone.vue'
import History from '../views/History.vue'

const routes = [
	{ path: '/', component: Home },
	{ path: '/snapshot', component: Snapshot },
	{ path: '/zone', component: Zone },
	{ path: '/history', component: History },
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
