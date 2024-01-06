import { AbstractSpotifyRequest } from "@/models/spotify/requests/AbstractRequest";
import { AxiosUtils } from "@/utils/Axios";
import { CookieUtils } from "@/utils/Cookie";

export abstract class AbstractSpotifyApiRequest<T> extends AbstractSpotifyRequest {
  private tokenType: string = 'Bearer'

  private url: string = import.meta.env.VITE_SPOTIFY_API_URL

  public async get(params: object = {}): Promise<T> {
    return await AxiosUtils.get<T>(
      this.getUrl(),
      this.getRequestHeaders(),
      params
    )
  }

  public async post(params: object = {}, body: object | null = null): Promise<T> {
    return await AxiosUtils.post<T>(
      this.getUrl(),
      this.getRequestHeaders(),
      params,
      body
    )
  }

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
