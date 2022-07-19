import { createContext, useCallback, useMemo, useState } from 'react'
import {
  googleLogout,
  GoogleOAuthProvider,
  hasGrantedAllScopesGoogle,
  useGoogleLogin,
} from '@react-oauth/google'
import PropTypes from 'prop-types'

import { fetchWithAuth } from 'core/common'

import { useLocalization } from 'features/localization'

export const AuthProviderContext = createContext()

const InnerAuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null)
  const [error, setError] = useState('')

  const { translations } = useLocalization()

  const isAuthorized = Boolean(accessToken)

  const login = useGoogleLogin({
    scope: `${process.env.REACT_APP_GOOGLE_API_SCOPE}`,
    onSuccess: response => {
      const hasAccess = hasGrantedAllScopesGoogle(
        response,
        `${process.env.REACT_APP_GOOGLE_API_SCOPE}`,
      )

      if (hasAccess) {
        setAccessToken(response.access_token)
        setError('')
      } else {
        setError(translations.accessError)
      }
    },
    onError: () => {
      setError(translations.loginError)
    },
  })

  const logout = useCallback(() => {
    googleLogout()
    setAccessToken(null)
  }, [])

  const authFetch = useMemo(() => (accessToken ? fetchWithAuth(accessToken) : null), [accessToken])

  const value = useMemo(
    () => ({
      authFetch,
      error,
      isAuthorized,
      login,
      logout,
    }),
    [authFetch, error, isAuthorized, login, logout],
  )

  return <AuthProviderContext.Provider value={value}>{children}</AuthProviderContext.Provider>
}

InnerAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const AuthProvider = ({ children, clientId }) => (
  <GoogleOAuthProvider clientId={clientId}>
    <InnerAuthProvider>{children}</InnerAuthProvider>
  </GoogleOAuthProvider>
)

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
  clientId: PropTypes.string.isRequired,
}
