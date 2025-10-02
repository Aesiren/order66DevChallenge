import { createMemoryHistory, createRouter } from 'vue-router'
import Welcome from '../pages/Welcome.vue'
import Bio from '../pages/Bio.vue'
import Resume from '../pages/Resume.vue'
import Funfact from '../pages/Funfact.vue'
import Skills from '../pages/Skills.vue'
import Experience from '../pages/Experience.vue'
import References from '../pages/References.vue'

const routes = [
  { path: '/', component: Welcome },
  { path: '/bio', component: Bio },
  { path: '/resume', component: Resume },
  { path: '/funfact', component: Funfact },
  { path: '/skills', component: Skills },
  { path: '/experience', component: Experience },
  { path: '/references', component: References }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router