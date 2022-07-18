import { createContext, useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

import { useCalendar } from 'features/calendar'

export const EventsProviderContext = createContext()

export const EventsProvider = ({ children }) => {
  const { calendarId, Request, timeMin, timeMax } = useCalendar()

  const [creating, setCreating] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [fetching, setFetching] = useState(false)
  const [events, setEvents] = useState([])

  const basePath = `/calendars/${calendarId}/events`
  const getPath = `${basePath}?timeMin=${timeMin}&timeMax=${timeMax}`

  const getEvents = useCallback(async () => {
    if (!Request) {
      return
    }

    try {
      setFetching(true)
      const response = await Request.get(getPath)
      const { items } = await response.json()
      if (response.status === 200) {
        setEvents(items)
      }
    } catch (err) {
      // TODO: show error somewhere
    } finally {
      setFetching(false)
    }
  }, [getPath, Request])

  const createEvent = useCallback(
    async ({ name, start, end }) => {
      if (!Request) {
        return false
      }

      try {
        setCreating(true)
        const { status } = await Request.post(basePath, {
          summary: name,
          start: { dateTime: start },
          end: { dateTime: end },
        })
        if (status === 200) {
          getEvents()
          return true
        }
      } catch (err) {
        // TODO: show error somewhere
      } finally {
        setCreating(false)
      }

      return false
    },
    [basePath, Request, getEvents],
  )

  const deleteEvent = useCallback(
    async eventId => {
      if (!Request) {
        return
      }

      try {
        setDeleting(true)
        const { status } = await Request.delete(`${basePath}/${eventId}`)
        if (status === 204) {
          getEvents()
        }
      } catch (err) {
        // TODO: show error somewhere
      } finally {
        setDeleting(false)
      }
    },
    [basePath, Request, getEvents],
  )

  const value = useMemo(
    () => ({
      events,
      creating,
      deleting,
      fetching,
      getEvents,
      createEvent,
      deleteEvent,
    }),
    [events, creating, deleting, fetching, getEvents, createEvent, deleteEvent],
  )

  return <EventsProviderContext.Provider value={value}>{children}</EventsProviderContext.Provider>
}

EventsProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
