import { useCallback } from 'react'
import styled from 'styled-components'

import { Button, MoonIcon, SunIcon } from 'core/ui'

import { useLocalization } from 'features/localization'

import { ThemeType } from '../constants'
import { useTheme } from '../hooks'

export const ThemeSwitcher = () => {
  const { themeType, setThemeType } = useTheme()
  const { translations } = useLocalization()

  const isLight = themeType === ThemeType.Light
  const oppositeKey = isLight ? ThemeType.Dark : ThemeType.Light

  const handleThemeClick = useCallback(() => {
    setThemeType(oppositeKey)
  }, [oppositeKey, setThemeType])

  return (
    <ThemeButton onClick={handleThemeClick} title={translations[`${oppositeKey}Theme`]}>
      {isLight ? <MoonIcon /> : <SunIcon />}
    </ThemeButton>
  )
}

const ThemeButton = styled(Button)`
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
`
