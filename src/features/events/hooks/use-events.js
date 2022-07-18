import { useProvider } from 'core/common'

import { EventsProviderContext } from '../fragments/EventsProvider'

export const useEvents = () =>
  useProvider(
    EventsProviderContext,
    'Calendar context value is being used outside of context provider',
  )
