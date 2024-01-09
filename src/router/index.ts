import { createRouter, createWebHistory } from 'vue-router'
import { useSpotifyTokenStore } from '@/stores/spotify/token'
import { CookieUtils } from '@/utils/Cookie'
import type { SpotifyRefreshToken } from '@/types/spotify/Token'

// Main Views
import HomeView from '@/views/HomeView.vue'

// Spotify
// Authorization
import SpotifyAskAuthorizationView from '@/views/spotify/AskAuthorizationView.vue'
import SpotifyAuthorizationView from '@/views/spotify/AuthorizationView.vue'
import SpotifyMainView from '@/views/spotify/MainView.vue'
// Create Playlist
import SpotifyCreatePlaylistView from '@/views/spotify/create-playlist/MainView.vue'
import SpotifyCreatePlaylistSeedsView from '@/views/spotify/create-playlist/seeds/MainView.vue'
import SpotifyCreatePlaylistSeedsArtistsView from '@/views/spotify/create-playlist/seeds/ArtistsView.vue'
import SpotifyCreatePlaylistSeedsGenresView from '@/views/spotify/create-playlist/seeds/GenresView.vue'
import SpotifyCreatePlaylistSeedsTracksView from '@/views/spotify/create-playlist/seeds/TracksView.vue'

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
        },
        {
          path: 'create-playlist',
          name: 'spotify-create-playlist',
          component: SpotifyCreatePlaylistView,
          children: [
            {
              path: 'seeds',
              name: 'spotify-create-playlist-seeds',
              component: SpotifyCreatePlaylistSeedsView,
              children: [
                {
                  path: 'artists',
                  name: 'spotify-create-playlist-seeds-artists',
                  component: SpotifyCreatePlaylistSeedsArtistsView
                },
                {
                  path: 'genres',
                  name: 'spotify-create-playlist-seeds-genres',
                  component: SpotifyCreatePlaylistSeedsGenresView
                },
                {
                  path: 'tracks',
                  name: 'spotify-create-playlist-seeds-tracks',
                  component: SpotifyCreatePlaylistSeedsTracksView
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})

router.beforeEach(async (to) => {
  const accessToken: string | undefined = CookieUtils.get('X-SPOTIFY-ACCESS-TOKEN')
  const refreshToken: string | undefined = CookieUtils.get('X-SPOTIFY-REFRESH-TOKEN')

  if (
    accessToken === undefined &&
    refreshToken === undefined &&
    to.path.startsWith('/spotify') &&
    to.name !== 'spotify-ask-authorization' &&
    to.name !== 'spotify-authorization'
  ) {
    return {
      name: 'spotify-ask-authorization'
    }
  }

  if (accessToken === undefined && refreshToken !== undefined && to.path.startsWith('/spotify')) {
    const spotifyTokenStore = useSpotifyTokenStore()
    const { fetchRefreshToken } = spotifyTokenStore
    const spotifyRefreshToken: SpotifyRefreshToken = await fetchRefreshToken(refreshToken)
    CookieUtils.remove('X-SPOTIFY-REFRESH-TOKEN')

    const expiresAt = new Date()
    expiresAt.setTime(expiresAt.getTime() + spotifyRefreshToken.expires_in * 1000)

    CookieUtils.set('X-SPOTIFY-ACCESS-TOKEN', spotifyRefreshToken.access_token, expiresAt)
  }
})

export default router
