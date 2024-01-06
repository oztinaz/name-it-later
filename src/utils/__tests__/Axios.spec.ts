import { afterEach, describe, expect, test, vi, type Mocked } from 'vitest'
import axios from 'axios'
import { AxiosUtils } from '@/utils/Axios'

vi.mock('axios')
const mockAxios = axios as Mocked<typeof axios>

describe('utils/Axios', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  const mockError: string = 'mock error'
  const mockResponse: string = 'mock response'
  const mockUrl: string = 'mock url'

  test('get resolves data when axios.get works successfully', async () => {
    mockAxios.get.mockResolvedValueOnce({
      data: mockResponse
    })
    const response = await AxiosUtils.get<any>(mockUrl)
    expect(response).toBe(mockResponse)
  })

  test('get rejects error when axios.get fails', () => {
    mockAxios.get.mockRejectedValueOnce(mockError)
    expect(async () => {
      await AxiosUtils.get<any>(mockUrl)
    }).rejects.toThrow(mockError)
  })

  test('post resolves data when axios.post works successfully', async () => {
    mockAxios.post.mockResolvedValueOnce({
      data: mockResponse
    })
    const response = await AxiosUtils.post<any>(mockUrl)
    expect(response).toBe(mockResponse)
  })

  test('post rejects error when axios.post fails', () => {
    mockAxios.post.mockRejectedValueOnce(mockError)
    expect(async () => {
      await AxiosUtils.post<any>(mockUrl)
    }).rejects.toThrow(mockError)
  })
})
