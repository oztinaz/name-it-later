import { AbstractSpotifyApiGetRequest } from '@/models/spotify/requests/api/AbstractApiGetRequest'
import type { SpotifySearchItem } from '@/types/spotify/responses/SearchItem'
import type { SpotifyBasicAlbum } from "@/types/spotify/Album"
import type { SpotifyArtist } from "@/types/spotify/Artist"
import type { SpotifyTrack } from "@/types/spotify/Track"

export class SearchRequest<T extends SpotifyBasicAlbum | SpotifyArtist | SpotifyTrack> extends AbstractSpotifyApiGetRequest<SpotifySearchItem<T>> {
  private urlPath: string = '/search'

  private query: string = ''

  private type: 'album' | 'artist' | 'track'
  
  constructor(type: 'album' | 'artist' | 'track') {
    super()
    this.type = type
  }

  public getUrlPath(): string {
    return this.urlPath
  }

  public getQuery(): string {
    return this.query
  }

  public setQuery(query: string): void {
    this.query = query
  }

  public getType(): string {
    return this.type
  }

  public getRequestParams(): object {
    return {
      q: this.getQuery(),
      type: this.getType()
    }
  }
}
