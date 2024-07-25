import {createRouter, createWebHistory} from 'vue-router'
import Default from "@/layouts/PrincipalLayout.vue";
import HelloWorld from "@/pages/PresentacionView.vue";
import MiEducacionView from "@/pages/MiEducacionView.vue";
import MyExperienceView from "@/pages/MyExperienceView.vue";
import ProyectosView from "@/pages/ProyectosView.vue";

const routes = [
  {
    path: '/',
    redirect: '/about-me' // Redirige automáticamente a /about-me
  },
  {
    path: '/',
    name: 'Home',
    component: Default,
    children: [
      {
      path: 'about-me',
      name: 'About me',
      component: HelloWorld
    },
      {
        path: 'experience-and-education',
        name: 'experiencie and education',
        component: MiEducacionView
      },
      {
        path: 'experience',
        name: 'Experience',
        component: MyExperienceView
      },
      {
        path: 'proyectos',
        name: 'Proyectos',
        component: ProyectosView
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
