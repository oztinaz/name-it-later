import { AbstractSpotifyApiGetRequest } from "@/models/spotify/requests/api/AbstractApiGetRequest";
import type { SpotifyRecommendation } from "@/types/spotify/Recommendation";
import { ObjectUtils } from "@/utils/Object";

export class GetRecommendationsRequest extends AbstractSpotifyApiGetRequest<SpotifyRecommendation> {
  
  private urlPath: string = '/recommendations'

  private limit: number = 20

  private seedArtists: string[] = []

  private seedGenres: string[] = []

  private seedTracks: string[] = []
  
  public getUrlPath(): string {
    return this.urlPath
  }

  public getLimit(): number {
    return this.limit
  }

  public setLimit(limit: number): void {
    this.limit = limit
  }

  public getSeedArtists(): string[] {
    return this.seedArtists
  }

  public addSeedArtist(seedArtist: string): void {
    this.seedArtists.push(seedArtist)
  }

  public removeSeedArtist(seedArtist: string): void {
    this.seedArtists.splice(this.seedArtists.findIndex((s: string) => s === seedArtist), 1)
  }

  public isSeedArtistAdded(seedArtist: string): boolean {
    return this.seedArtists.filter((s: string) => s === seedArtist).length > 0
  }

  public getSeedArtistsRequestValue(): string {
    return this.getSeedArtists().join(',')
  }

  public getSeedGenres(): string[] {
    return this.seedGenres
  }

  public addSeedGenre(seedGenre: string): void {
    this.seedGenres.push(seedGenre)
  }

  public removeSeedGenre(seedGenre: string): void {
    this.seedGenres.splice(this.seedGenres.findIndex((s: string) => s === seedGenre), 1)
  }

  public isSeedGenreAdded(seedGenre: string): boolean {
    return this.seedGenres.filter((s: string) => s === seedGenre).length > 0
  }

  public getSeedGenresRequestValue(): string {
    return this.getSeedGenres().join(',')
  }

  public getSeedTracks(): string[] {
    return this.seedTracks
  }

  public addSeedTrack(seedTrack: string): void {
    this.seedTracks.push(seedTrack)
  }

  public removeSeedTrack(seedTrack: string): void {
    this.seedTracks.splice(this.seedTracks.findIndex((s: string) => s === seedTrack), 1)
  }

  public isSeedTrackAdded(seedTrack: string): boolean {
    return this.seedTracks.filter((s: string) => s === seedTrack).length > 0
  }

  public getSeedTracksRequestValue(): string {
    return this.getSeedTracks().join(',')
  }

  public getSeedCount(): number {
    return this.getSeedArtists().length +
      this.getSeedGenres().length +
      this.getSeedTracks().length
  }

  public isSeedCountValid(): boolean {
    const seedCount: number = this.getSeedCount()
    return seedCount > 0 && seedCount <= 5
  }

  public getRequestParams(): object {
    let params = ObjectUtils.removeValues(this.getRequestParamsBase(), '')
    return params
  }

  public getRequestParamsBase(): object {
    return {
      limit: this.getLimit(),
      seed_artists: this.getSeedArtistsRequestValue(),
      seed_genres: this.getSeedGenresRequestValue(),
      seed_tracks: this.getSeedTracksRequestValue()
    }
  }
}