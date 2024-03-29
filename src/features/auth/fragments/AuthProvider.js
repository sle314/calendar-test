import { createContext, useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  googleLogout,
  GoogleOAuthProvider,
  hasGrantedAllScopesGoogle,
  useGoogleLogin,
} from '@react-oauth/google'
import PropTypes from 'prop-types'

import { fetchWithAuth, getPrefixedKey, Route, useStateWithLocalStorage } from 'core/common'

import { useLocalization } from 'features/localization'

const LOCAL_STORAGE_KEY = getPrefixedKey('access-token')

export const AuthProviderContext = createContext()

const InnerAuthProvider = ({ children }) => {
  const [accessToken, setAccessToken, unsetAccessToken] = useStateWithLocalStorage(
    LOCAL_STORAGE_KEY,
    null,
  )
  const [error, setError] = useState('')
  const navigate = useNavigate()

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
    unsetAccessToken()
  }, [unsetAccessToken])

  const authFetch = useMemo(
    () =>
      accessToken
        ? fetchWithAuth(accessToken, () => {
            navigate(Route.Logout)
          })
        : null,
    [accessToken, navigate],
  )

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
