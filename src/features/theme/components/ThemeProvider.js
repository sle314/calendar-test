import PropTypes from 'prop-types'
import { createGlobalStyle, ThemeProvider as ThemeProviderBase } from 'styled-components'
import { normalize } from 'styled-normalize'
import reset from 'styled-reset'

const baseTheme = {
  space: {
    xsmall: '4px',
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
  },
}

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${normalize}

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  h1, h2 {
    margin: 0;
    padding: 0;
    line-height: 1;
  }

  h1 {
    font-size: 3.2rem;
    margin: ${({ theme }) => theme.space.large} 0;
  }

  h2 {
    font-size: 2rem;
    margin: ${({ theme }) => theme.space.medium} 0;
    font-weight: 500;
  }

  div, header, footer {
    box-sizing: border-box;
  }
`

export const ThemeProvider = ({ children }) => (
  <ThemeProviderBase theme={baseTheme}>
    <GlobalStyle />
    {children}
  </ThemeProviderBase>
)

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
