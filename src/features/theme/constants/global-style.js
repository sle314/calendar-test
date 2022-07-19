import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}
  ${normalize}

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    margin: 0;
    font-family: ${({ theme }) => theme.fontFamily};
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.secondary};
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
