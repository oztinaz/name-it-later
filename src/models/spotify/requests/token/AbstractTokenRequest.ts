import { AbstractSpotifyRequest } from '@/models/spotify/requests/AbstractRequest'
import { AxiosUtils } from '@/utils/Axios'
import { Buffer } from 'buffer'
import type { SpotifyToken } from '@/types/spotify/Token'

export abstract class AbstractSpotifyTokenRequest<
  T extends SpotifyToken
> extends AbstractSpotifyRequest {
  private clientId: string = import.meta.env.VITE_SPOTIFY_CLIENT_ID

  private clientSecret: string = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET

  private contentType: string = 'application/x-www-form-urlencoded'

  private url: string = `${import.meta.env.VITE_SPOTIFY_ACCOUNTS_URL}/api/token`

  public async fetchToken(payload: string): Promise<T> {
    return await AxiosUtils.post<T>(
      this.getUrl(),
      this.getRequestHeaders(),
      {},
      this.getRequestBody(payload)
    )
  }

  public getRequestHeaders(): object {
    return {
      'content-type': this.getContentType(),
      Authorization: `Basic ${this.createBase64Component()}`
    }
  }

  public getUrl(): string {
    return this.url
  }

  public getClientId(): string {
    return this.clientId
  }

  public getClientSecret(): string {
    return this.clientSecret
  }

  public getContentType(): string {
    return this.contentType
  }

  public createBase64Component(): string {
    return Buffer.from(`${this.getClientId()}:${this.getClientSecret()}`).toString('base64')
  }

  abstract getRequestBody(payload: string): object

  abstract getGrantType(): string
}
