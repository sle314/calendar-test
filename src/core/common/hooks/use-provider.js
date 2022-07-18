import { useContext } from 'react'

export const useProvider = (
  context,
  errorMessage = 'Provided context was used outside its provider',
) => {
  const value = useContext(context)

  if (value === undefined) {
    throw new Error(errorMessage)
  }

  return value
}
