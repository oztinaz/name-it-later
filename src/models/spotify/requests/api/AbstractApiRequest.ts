import { AbstractSpotifyRequest } from "@/models/spotify/requests/AbstractRequest";
import { CookieUtils } from "@/utils/Cookie";

export abstract class AbstractSpotifyApiRequest<T> extends AbstractSpotifyRequest {
  private apiUrl: string = import.meta.env.VITE_SPOTIFY_API_URL

  private tokenType: string = 'Bearer'

  public getRequestHeaders(): object {
    return {
      Authorization: `${this.getTokenType()} ${CookieUtils.get('X-SPOTIFY-ACCESS-TOKEN')}`
    }
  }

  public getApiUrl(): string {
    return this.apiUrl
  }

  public getTokenType(): string {
    return this.tokenType
  }

  public getUrl(): string {
    return `${this.getApiUrl()}${this.getUrlPath()}`
  }

  abstract getUrlPath(): string
}
