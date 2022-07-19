import { noop } from '../constants'

export const fetchWithAuth =
  (accessToken, onUnauthorized = noop) =>
  async (url, options = {}) => {
    const updatedOptions = { ...options }

    if (accessToken) {
      updatedOptions.headers = {
        ...(updatedOptions.headers || {}),
        Authorization: `Bearer ${accessToken}`,
      }
    }

    const response = await fetch(url, updatedOptions)

    if (response.status === 401) {
      onUnauthorized()
    }

    return response
  }
