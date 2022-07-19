import { useProvider } from 'core/common'

import { LocalizationProviderContext } from '../fragments/LocalizationProvider'

export const useLocalization = () =>
  useProvider(
    LocalizationProviderContext,
    'Language context value is being used outside of context provider',
  )
