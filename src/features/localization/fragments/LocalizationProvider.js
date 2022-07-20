import React, { createContext, useMemo } from 'react'
import PropTypes from 'prop-types'

import { getPrefixedKey, LanguageKey, useStateWithLocalStorage } from 'core/common'
import { translations as translationsMapping } from 'core/translations'

const LOCAL_STORAGE_KEY = getPrefixedKey('language-key')

const DEFAULT_LANGUAGE = LanguageKey.English

export const LocalizationProviderContext = createContext()

export const LocalizationProvider = ({ children }) => {
  const [languageKey, setLanguageKey] = useStateWithLocalStorage(
    LOCAL_STORAGE_KEY,
    DEFAULT_LANGUAGE,
  )

  const translations = useMemo(
    () => translationsMapping[languageKey] || translationsMapping[DEFAULT_LANGUAGE],
    [languageKey],
  )

  const value = useMemo(
    () => ({
      languageKey,
      setLanguageKey,
      translations,
    }),
    [languageKey, setLanguageKey, translations],
  )

  return (
    <LocalizationProviderContext.Provider value={value}>
      {children}
    </LocalizationProviderContext.Provider>
  )
}

LocalizationProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
