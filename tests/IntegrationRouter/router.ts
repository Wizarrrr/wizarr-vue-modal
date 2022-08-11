import {createRouter, createWebHistory} from "vue-router";
import {useModalRouter} from "../../plugin/index";
import ModalRoute from "./ModalRoute.vue";
import ContainerUsers from "./ContainerUsers.vue";
import ModalUser from "./ModalUser.vue";
import ModalGuard from "../../web/src/pages/test/Modalguard.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/router-simple-modal",
			component: useModalRouter(ModalRoute)
		},
		{
			path: "/simple-modal",
			component: useModalRouter(ModalRoute)
		},
		{
			path: "/users",
			component: ContainerUsers,
			children: [
				{
					path: ":id",
					components: {
						modal: useModalRouter(ModalUser)
					}
				}
			]
		},
		{
			path: '/a',
			component: {
				template: 'A'
			}
		},
		{
			path: '/b',
			component: {
				template: 'B'
			}
		},
		{
			path: '/c',
			component: {
				template: 'C'
			}
		},
		{
			path: '/',
			component: {
				template: 'Test'
			}
		},
		{
			path: "/guard",
			component: useModalRouter(ModalGuard)
		}
	]
})

export default router;