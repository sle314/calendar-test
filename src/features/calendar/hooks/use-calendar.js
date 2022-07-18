import { useProvider } from 'core/common'

import { CalendarProviderContext } from '../fragments/CalendarProvider'

export const useCalendar = () =>
  useProvider(
    CalendarProviderContext,
    'Calendar context value is being used outside of context provider',
  )
