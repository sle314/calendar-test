import { GoogleOAuthProvider } from '@react-oauth/google'
import PropTypes from 'prop-types'

import { ThemeProvider } from 'features/theme'

export const AppProvider = ({ children }) => (
  <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}>
    <ThemeProvider>{children}</ThemeProvider>
  </GoogleOAuthProvider>
)

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
