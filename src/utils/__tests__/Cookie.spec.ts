import { describe, expect, test, vi } from 'vitest'
import { CookieUtils } from '@/utils/Cookie'

const key1: string = 'key1'
const key2: string = 'key2'
const value1: string = 'value1'
const value2: string = 'value2'

vi.mock('document')

describe('utils/Cookie', () => {
  test('all returns cookies as object key value pairs', () => {
    vi.spyOn(document, 'cookie', 'get').mockReturnValueOnce(`${key1}=${value1}; ${key2}=${value2}`)
    const response: any = CookieUtils.all()
    expect(response).toStrictEqual({
      key1: value1,
      key2: value2
    })
  })

  test('all returns empty object when document.cookie is an empty string', () => {
    vi.spyOn(document, 'cookie', 'get').mockReturnValueOnce('')
    const response: any = CookieUtils.all()
    expect(response).toStrictEqual({})
  })

  test('get returns the value of given cookie key', () => {
    vi.spyOn(document, 'cookie', 'get').mockReturnValueOnce(`${key1}=${value1}`)
    const response: any = CookieUtils.get(key1)
    expect(response).toBe(value1)
  })

  test('get returns undefined when an invalid key given', () => {
    vi.spyOn(document, 'cookie', 'get').mockReturnValueOnce(`${key1}=${value1}`)
    const response: any = CookieUtils.get('unknown key')
    expect(response).toBeUndefined()
  })

  test('set adds a new pair to cookies', () => {
    CookieUtils.set(key1, value1)
    expect(CookieUtils.all()).toStrictEqual({
      key1: value1
    })
  })

  test('remove deletes the specified key', () => {
    CookieUtils.set(key1, value1)
    expect(CookieUtils.all()).toStrictEqual({
      key1: value1
    })
    CookieUtils.remove(key1)
    expect(CookieUtils.all()).toStrictEqual({})
  })
})
