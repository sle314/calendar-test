import { useCallback } from 'react'
import { GoogleLogin } from '@react-oauth/google'

import { AppProvider } from './AppProvider'

export const App = () => {
  const handleSuccess = useCallback((credentialResponse) => {
    console.error(credentialResponse)
  }, [])

  return (
    <AppProvider>
      <GoogleLogin onSuccess={handleSuccess} />
    </AppProvider>
  )
}
