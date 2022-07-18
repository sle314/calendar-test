import { HttpMethod } from '../constants'

export const generateFetchForMethod =
  (method, fetchInstance = fetch) =>
  (url, options = {}) =>
    fetchInstance(url, { ...options, method })

export const Request = class {
  constructor(fetchInstance = fetch) {
    this.fetch = fetchInstance
  }

  get = (...args) => generateFetchForMethod(HttpMethod.Get, this.fetch)(...args)

  post = (url, data, options, ...args) =>
    generateFetchForMethod(HttpMethod.Post, this.fetch)(
      url,
      { ...options, body: JSON.stringify(data || {}) },
      ...args,
    )

  delete = (...args) => generateFetchForMethod(HttpMethod.Delete, this.fetch)(...args)
}
