import { beforeEach, describe, expect, test, vi } from 'vitest'
import { GetRecommendationsRequest } from '@/models/spotify/requests/api/GetRecommendationsRequest'

describe('models/spotify/requests/api/GetRecommendationsRequest', () => {
  let mockObj: GetRecommendationsRequest

  beforeEach(() => {
    mockObj = new GetRecommendationsRequest()
  })
  
  const mockSeedArtist1: string = 'a1'
  const mockSeedArtist2: string = 'a2'

  const mockSeedGenre1: string = 'g1'
  const mockSeedGenre2: string = 'g2'

  const mockSeedTrack1: string = 't1'
  const mockSeedTrack2: string = 't2'

  test('getUrlPath gets url path', async () => {
    expect(mockObj.getUrlPath()).toBe('/recommendations')
  })

  test('getLimit gets limit', async () => {
    expect(mockObj.getLimit()).toBe(20)
  })

  test('setLimit sets limit', async () => {
    const mockLimit = 10
    mockObj.setLimit(mockLimit)
    expect(mockObj.getLimit()).toBe(mockLimit)
  })

  test('getSeedArtists gets seed artists', () => {
    expect(mockObj.getSeedArtists()).toStrictEqual([])
  })

  test('addSeedArtist adds seed artist', () => {
    mockObj.addSeedArtist(mockSeedArtist1)
    expect(mockObj.getSeedArtists()).toStrictEqual([mockSeedArtist1])
  })

  test('removeSeedArtist remove seed artist', () => {
    mockObj.addSeedArtist(mockSeedArtist1)
    mockObj.addSeedArtist(mockSeedArtist2)
    mockObj.removeSeedArtist(mockSeedArtist2)
    expect(mockObj.getSeedArtists()).toStrictEqual([mockSeedArtist1])
  })

  test('isSeedArtistAdded returns true if seed artist added', () => {
    mockObj.addSeedArtist(mockSeedArtist1)
    expect(mockObj.isSeedArtistAdded(mockSeedArtist1)).toBeTruthy()
  })

  test('isSeedArtistAdded returns false if seed artist not added', () => {
    expect(mockObj.isSeedArtistAdded(mockSeedArtist1)).toBeFalsy()
  })

  test('getSeedArtistsRequestValue returns empty string if seed artists is empty', () => {
    expect(mockObj.getSeedArtistsRequestValue()).toBe('')
  })

  test('getSeedArtistsRequestValue returns proper string of seed artists when seed artists is not empty', () => {
    mockObj.addSeedArtist(mockSeedArtist1)
    mockObj.addSeedArtist(mockSeedArtist2)
    expect(mockObj.getSeedArtistsRequestValue()).toBe([mockSeedArtist1, mockSeedArtist2].join(','))
  })

  test('getSeedGenres gets seed genres', () => {
    expect(mockObj.getSeedGenres()).toStrictEqual([])
  })

  test('addSeedGenre adds seed genre', () => {
    mockObj.addSeedGenre(mockSeedGenre1)
    expect(mockObj.getSeedGenres()).toStrictEqual([mockSeedGenre1])
  })

  test('removeSeedGenre remove seed genre', () => {
    mockObj.addSeedGenre(mockSeedGenre1)
    mockObj.addSeedGenre(mockSeedGenre2)
    mockObj.removeSeedGenre(mockSeedGenre2)
    expect(mockObj.getSeedGenres()).toStrictEqual([mockSeedGenre1])
  })

  test('isSeedGenreAdded returns true if seed genre added', () => {
    mockObj.addSeedGenre(mockSeedGenre1)
    expect(mockObj.isSeedGenreAdded(mockSeedGenre1)).toBeTruthy()
  })

  test('isSeedGenreAdded returns false if seed genre not added', () => {
    expect(mockObj.isSeedGenreAdded(mockSeedGenre1)).toBeFalsy()
  })

  test('getSeedGenresRequestValue returns empty string if seed genres is empty', () => {
    expect(mockObj.getSeedGenresRequestValue()).toBe('')
  })

  test('getSeedGenresRequestValue returns proper string of seed genres when seed genres is not empty', () => {
    mockObj.addSeedGenre(mockSeedGenre1)
    mockObj.addSeedGenre(mockSeedGenre2)
    expect(mockObj.getSeedGenresRequestValue()).toBe([mockSeedGenre1, mockSeedGenre2].join(','))
  })

  test('getSeedTracks gets seed tracks', () => {
    expect(mockObj.getSeedTracks()).toStrictEqual([])
  })

  test('addSeedTrack adds seed track', () => {
    mockObj.addSeedTrack(mockSeedTrack1)
    expect(mockObj.getSeedTracks()).toStrictEqual([mockSeedTrack1])
  })

  test('removeSeedTrack remove seed track', () => {
    mockObj.addSeedTrack(mockSeedTrack1)
    mockObj.addSeedTrack(mockSeedTrack2)
    mockObj.removeSeedTrack(mockSeedTrack2)
    expect(mockObj.getSeedTracks()).toStrictEqual([mockSeedTrack1])
  })

  test('isSeedTrackAdded returns true if seed track added', () => {
    mockObj.addSeedTrack(mockSeedTrack1)
    expect(mockObj.isSeedTrackAdded(mockSeedTrack1)).toBeTruthy()
  })

  test('isSeedTrackAdded returns false if seed track not added', () => {
    expect(mockObj.isSeedTrackAdded(mockSeedTrack1)).toBeFalsy()
  })

  test('getSeedTracksRequestValue returns empty string if seed tracks is empty', () => {
    expect(mockObj.getSeedTracksRequestValue()).toBe('')
  })

  test('getSeedTracksRequestValue returns proper string of seed tracks when seed tracks is not empty', () => {
    mockObj.addSeedTrack(mockSeedTrack1)
    mockObj.addSeedTrack(mockSeedTrack2)
    expect(mockObj.getSeedTracksRequestValue()).toBe([mockSeedTrack1, mockSeedTrack2].join(','))
  })

  test('getSeedCount gets the total count of seeds', () => {
    mockObj.addSeedArtist(mockSeedArtist1)
    mockObj.addSeedGenre(mockSeedGenre1)
    mockObj.addSeedTrack(mockSeedTrack1)
    expect(mockObj.getSeedCount()).toBe(3)
  })

  test('isSeedCountValid returns false if seed count is above 5', () => {
    mockObj.addSeedArtist(mockSeedArtist1)
    mockObj.addSeedArtist(mockSeedArtist2)
    mockObj.addSeedGenre(mockSeedGenre1)
    mockObj.addSeedGenre(mockSeedGenre2)
    mockObj.addSeedTrack(mockSeedTrack1)
    mockObj.addSeedTrack(mockSeedTrack2)
    expect(mockObj.isSeedCountValid()).toBeFalsy()
  })

  test('isSeedCountValid returns false if seed count is 0', () => {
    expect(mockObj.isSeedCountValid()).toBeFalsy()
  })

  test('isSeedCountValid returns true if seed count is between 0-6', () => {
    mockObj.addSeedArtist(mockSeedArtist1)
    mockObj.addSeedArtist(mockSeedArtist2)
    mockObj.addSeedGenre(mockSeedGenre1)
    mockObj.addSeedGenre(mockSeedGenre2)
    mockObj.addSeedTrack(mockSeedTrack1)
    expect(mockObj.isSeedCountValid()).toBeTruthy()
  })

  test('getRequestParams gets request params', () => {
    const mockLimit = 5
    const mockSeed = 'mock seed'
    vi.spyOn(mockObj, 'getLimit').mockReturnValueOnce(mockLimit)
    vi.spyOn(mockObj, 'getSeedArtistsRequestValue').mockReturnValueOnce(mockSeed)
    vi.spyOn(mockObj, 'getSeedGenresRequestValue').mockReturnValueOnce(mockSeed)
    vi.spyOn(mockObj, 'getSeedTracksRequestValue').mockReturnValueOnce(mockSeed)
  
    expect(mockObj.getRequestParams()).toStrictEqual({
      limit: mockLimit,
      seed_artists: mockSeed,
      seed_genres: mockSeed,
      seed_tracks: mockSeed
    })
  })
})
