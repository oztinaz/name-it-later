import { AbstractSpotifyTokenRequest } from '@/models/spotify/requests/token/AbstractTokenRequest'
import type { SpotifyRefreshToken } from '@/types/spotify/Token'

export class SpotifyRefreshTokenRequest extends AbstractSpotifyTokenRequest<SpotifyRefreshToken> {

  private grantType: string = 'refresh_token'

  public getRequestBody(payload: string): object {
    return {
      refresh_token: payload,
      grant_type: this.getGrantType()
    }
  }

  public getGrantType(): string {
    return this.grantType
  }
}