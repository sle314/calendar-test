import { removeCharFromEnd, removeCharFromStart } from './string'

describe('removeCharFromStart', () => {
  it('should remove given char from start of string and return the new string', () => {
    expect(removeCharFromStart('/test/', '/')).toEqual('test/')
  })

  it('should return the given string if it does not start with the given char', () => {
    expect(removeCharFromStart('test/', '/')).toEqual('test/')
  })

  it('should remove just one given char from the start', () => {
    expect(removeCharFromStart('//test//', '/')).toEqual('/test//')
  })
})

describe('removeCharFromEnd', () => {
  it('should remove given char from end of string and return the new string', () => {
    expect(removeCharFromEnd('/test/', '/')).toEqual('/test')
  })

  it('should return the given string if it does not end with the given char', () => {
    expect(removeCharFromEnd('/test', '/')).toEqual('/test')
  })

  it('should remove just one given char from the end', () => {
    expect(removeCharFromEnd('//test//', '/')).toEqual('//test/')
  })
})
