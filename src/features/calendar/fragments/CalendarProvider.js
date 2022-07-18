import { createContext, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

import { Request as BaseRequest } from 'core/common'

import { useAuth } from 'features/auth'

import { DEFAULT_NUMBER_OF_DAYS } from '../constants'
import { calendarFetch } from '../services'

export const CalendarProviderContext = createContext()

export const CalendarProvider = ({ calendarId, children }) => {
  const { authFetch } = useAuth()
  const [numOfDays, setNumOfDays] = useState(DEFAULT_NUMBER_OF_DAYS)

  const numOfDaysNumber = parseInt(numOfDays, 10)

  const [timeMin, timeMax] = useMemo(() => {
    const start = new Date()
    start.setHours(0, 0, 0, 0)

    const end = new Date(start.getTime())
    end.setDate(end.getDate() + numOfDaysNumber - 1)
    end.setHours(23, 59, 59, 999)

    return [start.toISOString(), end.toISOString()]
  }, [numOfDaysNumber])

  const Request = useMemo(
    () => (authFetch ? new BaseRequest(calendarFetch(authFetch)) : null),
    [authFetch],
  )

  const value = useMemo(
    () => ({
      calendarId,
      numOfDays: numOfDaysNumber,
      Request,
      setNumOfDays,
      timeMin,
      timeMax,
    }),
    [calendarId, numOfDaysNumber, Request, setNumOfDays, timeMin, timeMax],
  )

  return (
    <CalendarProviderContext.Provider value={value}>{children}</CalendarProviderContext.Provider>
  )
}

CalendarProvider.propTypes = {
  calendarId: PropTypes.string,
  children: PropTypes.node.isRequired,
}

CalendarProvider.defaultProps = {
  calendarId: 'primary',
}
