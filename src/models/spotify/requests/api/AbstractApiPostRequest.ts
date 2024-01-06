import { AbstractSpotifyApiRequest } from "@/models/spotify/requests/api/AbstractApiRequest"
import { AxiosUtils } from "@/utils/Axios"

export abstract class AbstractSpotifyPostGetRequest<T> extends AbstractSpotifyApiRequest<T> {
  public async post(params: object = {}, body: object | null = null): Promise<T> {
    return await AxiosUtils.post<T>(
      this.getUrl(),
      this.getRequestHeaders(),
      params,
      body
    )
  }
}