import { createRouter, createWebHistory } from 'vue-router'
import Home from '../App.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Social Media & Contact' }
  },
  {
    path: "/discord",
    name: "Discord",
    beforeEnter: () => {
    window.location.href = 'https://discord.gg/CDD223E3W3';
        },
    meta: { title: 'Discord' }
  },
  {
    path: "/invite",
    name: "Invite",
    beforeEnter: () => {
    window.location.href = 'https://discord.com/oauth2/authorize?client_id=913029521815502869&permissions=8&scope=bot+applications.commands';
        },
    meta: { title: 'Invite' }
  },
  {
    path: "/soulvibe",
    name: "Website",
    beforeEnter: () => {
    window.location.href = 'https://soulvibe.xyz  ';
        },
    meta: { title: 'Website' }
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' - kydo();'; // Mengambil judul dari meta atau mengatur judul default jika tidak ada
  next();
});

export default router
