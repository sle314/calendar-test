import PropTypes from 'prop-types'

import { AuthProvider } from 'features/auth'
import { ThemeProvider } from 'features/theme'

export const AppProvider = ({ children }) => (
  <AuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}>
    <ThemeProvider>{children}</ThemeProvider>
  </AuthProvider>
)

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
