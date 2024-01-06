import { AbstractSpotifyApiGetRequest } from "./AbstractApiGetRequest";
import type { SpotifyProfile } from "@/types/spotify/Profile";

export class GetCurrentUsersProfileRequest extends AbstractSpotifyApiGetRequest<SpotifyProfile> {
  private urlPath: string = '/me'

  public getUrlPath(): string {
    return this.urlPath
  }
}