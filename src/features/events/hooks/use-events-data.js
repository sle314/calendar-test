import { useCallback, useEffect, useMemo } from 'react'

import { useCalendar } from 'features/calendar'

import { EventListDisplayType } from '../constants'
import { getEventsDataDaily, getEventsDataWeekly } from '../helpers'

import { useEvents } from './use-events'

export const useEventsData = () => {
  const { numOfDays } = useCalendar()
  const { events, getEvents, deleteEvent } = useEvents()
  const displayType = numOfDays >= 30 ? EventListDisplayType.Week : EventListDisplayType.Day

  const eventData = useMemo(() => {
    const orderedEvents = [...events]
      .filter(event => event.start && event.end)
      .sort((a, b) => (a.start.dateTime < b.start.dateTime ? -1 : 1))

    const eventsByDays = {}
    orderedEvents.forEach(event => {
      const eventDate = new Date(event.start.dateTime).toLocaleDateString('sv')
      if (!eventsByDays[eventDate]) {
        eventsByDays[eventDate] = []
      }
      eventsByDays[eventDate].push(event)
    })

    const getData =
      displayType === EventListDisplayType.Day ? getEventsDataDaily : getEventsDataWeekly

    return getData(numOfDays, eventsByDays)
  }, [displayType, numOfDays, events])

  const handleDeleteClick = useCallback(
    eventId => {
      deleteEvent(eventId)
    },
    [deleteEvent],
  )

  useEffect(() => {
    getEvents()
  }, [getEvents])

  return { data: eventData, displayType, handleDeleteClick }
}
