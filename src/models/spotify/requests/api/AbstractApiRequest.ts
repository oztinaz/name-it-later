import { AbstractSpotifyRequest } from "@/models/spotify/requests/AbstractRequest";
import { CookieUtils } from "@/utils/Cookie";

export abstract class AbstractSpotifyApiRequest<T> extends AbstractSpotifyRequest {
  private tokenType: string = 'Bearer'

  private url: string = import.meta.env.VITE_SPOTIFY_API_URL

  public getRequestHeaders(): object {
    return {
      Authorization: `${this.getTokenType()} ${CookieUtils.get('X-SPOTIFY-ACCESS-TOKEN')}`
    }
  }

  public getTokenType(): string {
    return this.tokenType
  }


  public getUrl(): string {
    return this.url
  }
}
