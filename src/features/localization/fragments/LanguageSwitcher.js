import { useCallback } from 'react'
import styled from 'styled-components'

import { LanguageKey } from 'core/common'
import { Button } from 'core/ui'

import { useLocalization } from '../hooks'

export const LanguageSwitcher = () => {
  const { languageKey, setLanguageKey } = useLocalization()

  const oppositeKey =
    languageKey === LanguageKey.English ? LanguageKey.Croatian : LanguageKey.English

  const handleLanguageClick = useCallback(() => {
    setLanguageKey(oppositeKey)
  }, [oppositeKey, setLanguageKey])

  return <LanguageButton onClick={handleLanguageClick}>{oppositeKey}</LanguageButton>
}

const LanguageButton = styled(Button)`
  border: none;
  background: transparent;
  margin: 0;
  padding: 0;
`
