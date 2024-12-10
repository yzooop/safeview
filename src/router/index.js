import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Snapshot from '../views/SnapshotPage.vue'
import Zone from '../views/ZonePage.vue'
import History from '../views/HistoryPage.vue'

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
