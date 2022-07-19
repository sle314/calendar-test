import { useProvider } from 'core/common'

import { ThemeProviderContext } from '../fragments/ThemeProvider'

export const useTheme = () =>
  useProvider(ThemeProviderContext, 'Theme context value is being used outside of context provider')
