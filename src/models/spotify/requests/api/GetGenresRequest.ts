import { AbstractSpotifyApiGetRequest } from './AbstractApiGetRequest'
import type { SpotifyGetGenreResponse } from '@/types/spotify/responses/GetGenresResponse'

export class GetGenresRequest extends AbstractSpotifyApiGetRequest<SpotifyGetGenreResponse> {
  private urlPath: string = '/recommendations/available-genre-seeds'

  public getUrlPath(): string {
    return this.urlPath
  }
}
