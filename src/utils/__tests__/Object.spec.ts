import { describe, expect, test, vi } from 'vitest'
import { ObjectUtils } from '@/utils/Object'

describe('utils/Object', () => {
  test('clone uses JSON.parse and JSON.stringify', () => {
    const mockObj = {}
    const spyStringify = vi.spyOn(JSON, 'stringify')
    const spyParse = vi.spyOn(JSON, 'parse')

    const result: any = ObjectUtils.clone(mockObj)

    expect(result).toStrictEqual(mockObj)
    expect(spyStringify).toHaveBeenCalledOnce()
    expect(spyStringify).toHaveBeenCalledWith(mockObj)
    expect(spyParse).toHaveBeenCalledOnce()
    expect(spyParse).toHaveBeenCalledWith(JSON.stringify(mockObj))
  })

  test('removeValues removes passed values from the object', () => {
    const mockObj = {
      key1: '',
      key2: 'mock str'
    }
    
    const result: any = ObjectUtils.removeValues(mockObj, '')

    expect(result).toStrictEqual({
      key2: 'mock str'
    })
  })
})
