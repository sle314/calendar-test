import { useCallback, useState } from 'react'

export const useStateWithLocalStorage = (localStorageKey, defaultValue) => {
  const [state, setState] = useState(localStorage.getItem(localStorageKey) || defaultValue)

  const setValue = useCallback(
    value => {
      setState(value)
      localStorage.setItem(localStorageKey, value)
    },
    [localStorageKey],
  )

  const unsetValue = useCallback(() => {
    setState(defaultValue)
    localStorage.removeItem(localStorageKey)
  }, [defaultValue, localStorageKey])

  return [state, setValue, unsetValue]
}
