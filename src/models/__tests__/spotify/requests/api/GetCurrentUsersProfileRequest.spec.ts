import { describe, expect, test } from 'vitest'
import { GetCurrentUsersProfileRequest } from '@/models/spotify/requests/api/GetCurrentUsersProfileRequest'

describe('models/spotify/requests/api/GetCurrentUsersProfileRequest', () => {
  const mockObj: GetCurrentUsersProfileRequest = new GetCurrentUsersProfileRequest()

  test('getUrlPath gets url path', async () => {
    expect(mockObj.getUrlPath()).toBe('/me')
  })
})
