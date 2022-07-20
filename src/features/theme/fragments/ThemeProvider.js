import React, { createContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { getPrefixedKey, useStateWithLocalStorage } from 'core/common'

import { GlobalStyle, ThemeType } from '../constants'
import { darkTheme, lightTheme } from '../themes'

const THEME_MAPPING = {
  [ThemeType.Light]: lightTheme,
  [ThemeType.Dark]: darkTheme,
}

const LOCAL_STORAGE_KEY = getPrefixedKey('theme-type')

export const ThemeProviderContext = createContext()

export const ThemeProvider = ({
  children,
  initialThemeType: initialThemeTypeProp = ThemeType.Default,
}) => {
  const [themeType, setThemeType] = useStateWithLocalStorage(
    LOCAL_STORAGE_KEY,
    initialThemeTypeProp,
  )

  const theme = useMemo(() => THEME_MAPPING[themeType], [themeType])

  const value = useMemo(
    () => ({
      theme,
      themeType,
      setThemeType,
    }),
    [theme, themeType, setThemeType],
  )

  return (
    <ThemeProviderContext.Provider value={value}>
      <StyledThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </StyledThemeProvider>
    </ThemeProviderContext.Provider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialThemeType: PropTypes.string,
}

ThemeProvider.defaultProps = {
  initialThemeType: ThemeType.Default,
}
