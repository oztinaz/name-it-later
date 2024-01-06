import { AbstractSpotifyTokenRequest } from '@/models/spotify/requests/token/AbstractTokenRequest'
import type { SpotifyAccessToken } from '@/types/spotify/Token'

export class SpotifyAccessTokenRequest extends AbstractSpotifyTokenRequest<SpotifyAccessToken> {
  private grantType: string = 'authorization_code'

  private redirectUri: string = import.meta.env.VITE_SPOTIFY_REDIRECT_URI

  public getRequestBody(payload: string): object {
    return {
      code: payload,
      grant_type: this.getGrantType(),
      redirect_uri: this.getRedirectUri()
    }
  }

  public getGrantType(): string {
    return this.grantType
  }

  public getRedirectUri(): string {
    return this.redirectUri
  }
}
