import { describe, expect, test } from "vitest";
import { AbstractSpotifyRequest } from "@/models/spotify/requests/AbstractRequest";

describe('models/spotify/requests/AbstractRequest', () => {
  const mockUrl: string = 'some url'

  class TestRequest extends AbstractSpotifyRequest {
    public getUrl(): string {
      return mockUrl
    }
  }

  const mockObj: AbstractSpotifyRequest = new TestRequest()

  test('getUrl gets url', () => {
    expect(mockObj.getUrl()).toBe(mockUrl)
  })
})