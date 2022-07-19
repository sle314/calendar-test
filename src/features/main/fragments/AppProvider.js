import PropTypes from 'prop-types'

import { AuthProvider } from 'features/auth'
import { LocalizationProvider } from 'features/localization'
import { ThemeProvider } from 'features/theme'

export const AppProvider = ({ children }) => (
  <LocalizationProvider>
    <AuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}>
      <ThemeProvider>{children}</ThemeProvider>
    </AuthProvider>
  </LocalizationProvider>
)

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
