import { describe, expect, test } from 'vitest'
import { GetGenresRequest } from '@/models/spotify/requests/api/GetGenresRequest'

describe('models/spotify/requests/api/GetGenresRequest', () => {
  const mockObj: GetGenresRequest = new GetGenresRequest()

  test('getUrlPath gets url path', async () => {
    expect(mockObj.getUrlPath()).toBe('/recommendations/available-genre-seeds')
  })
})
