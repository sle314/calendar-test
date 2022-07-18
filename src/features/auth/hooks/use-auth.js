import { useProvider } from 'core/common'

import { AuthProviderContext } from '../fragments/AuthProvider'

export const useAuth = () =>
  useProvider(AuthProviderContext, 'Auth context value is being used outside of context provider')
