import { AbstractSpotifyApiRequest } from '@/models/spotify/requests/api/AbstractApiRequest'
import { AxiosUtils } from '@/utils/Axios'

export abstract class AbstractSpotifyApiGetRequest<T> extends AbstractSpotifyApiRequest {
  public async get(params: object = {}): Promise<T> {
    return await AxiosUtils.get<T>(this.getUrl(), this.getRequestHeaders(), params)
  }
}
