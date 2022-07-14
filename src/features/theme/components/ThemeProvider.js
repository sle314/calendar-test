import PropTypes from 'prop-types'
import { createGlobalStyle, ThemeProvider as ThemeProviderBase } from 'styled-components'

const theme = {}

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`

export const ThemeProvider = ({ children }) => (
  <ThemeProviderBase theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProviderBase>
)

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
