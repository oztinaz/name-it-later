import { createRouter, createWebHistory } from 'vue-router'

// Main Views
import HomeView from '@/views/HomeView.vue'

// Spotify
// Authorization
import SpotifyAskAuthorizationView from '@/views/spotify/AskAuthorizationView.vue'
import SpotifyAuthorizationView from '@/views/spotify/AuthorizationView.vue'
import SpotifyMainView from '@/views/spotify/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/spotify',
      name: 'spotify',  
      component: SpotifyMainView,
      children: [
        {
          path: 'ask-authorization',
          name: 'spotify-ask-authorization',
          component: SpotifyAskAuthorizationView
        },
        {
          path: 'authorization',
          name: 'spotify-authorization',
          component: SpotifyAuthorizationView
        }
      ]
    }
  ]
})

export default router
