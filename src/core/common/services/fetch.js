export const fetchWithAuth =
  accessToken =>
  (url, options = {}) => {
    const updatedOptions = { ...options }

    if (accessToken) {
      updatedOptions.headers = {
        ...(updatedOptions.headers || {}),
        Authorization: `Bearer ${accessToken}`,
      }
    }

    return fetch(url, updatedOptions)
  }
