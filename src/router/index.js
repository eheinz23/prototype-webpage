import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/Home.vue'
import SecondPage from '@/views/SecondPage.vue'
import Gallery from '@/views/GalleryPage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage},
  { path: '/second-page', name: 'SecondPage', component: SecondPage, props: true },
  { path: '/gallery', name: 'Gallery', component: Gallery }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
