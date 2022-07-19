import { useCallback } from 'react'
import styled from 'styled-components'

import { Button } from 'core/ui'

import { useLocalization } from 'features/localization'

import { ThemeType } from '../constants'
import { useTheme } from '../hooks'

export const ThemeSwitcher = () => {
  const { themeType, setThemeType } = useTheme()
  const { translations } = useLocalization()

  const oppositeKey = themeType === ThemeType.Light ? ThemeType.Dark : ThemeType.Light

  const handleThemeClick = useCallback(() => {
    setThemeType(oppositeKey)
  }, [oppositeKey, setThemeType])

  return <ThemeButton onClick={handleThemeClick}>{translations[`${oppositeKey}Theme`]}</ThemeButton>
}

const ThemeButton = styled(Button)`
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
`
