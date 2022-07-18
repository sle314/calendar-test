import { useCallback, useEffect, useMemo } from 'react'

import { useCalendar } from 'features/calendar'

import { EventListDisplayType } from '../constants'

import { useEvents } from './use-events'

export const useEventsData = () => {
  const { numOfDays } = useCalendar()
  const { events, getEvents, deleteEvent } = useEvents()
  const displayType = numOfDays >= 30 ? EventListDisplayType.Week : EventListDisplayType.Day

  const orderedEvents = useMemo(
    () => [...events].sort((a, b) => (a.start.dateTime < b.start.dateTime ? -1 : 1)),
    [events],
  )

  const eventsByDays = {}
  orderedEvents.forEach(event => {
    const eventDate = new Date(event.start.dateTime).toLocaleDateString('sv')
    if (!eventsByDays[eventDate]) {
      eventsByDays[eventDate] = []
    }
    eventsByDays[eventDate].push(event)
  })

  // TODO: generate list of columns based on display type and numOfDays
  const data = []
  if (displayType === EventListDisplayType.Day) {
    for (let i = 0; i < numOfDays; i += 1) {
      const date = new Date()
      date.setDate(date.getDate() + i)
      data.push({
        label: date.toLocaleDateString(),
        events: eventsByDays[date.toLocaleDateString('sv')] || [],
      })
    }
  } else {
    let currentWeekEvents = []
    let lastDayOfWeek = new Date().toLocaleDateString()
    let firstDayOfWeek = new Date().toLocaleDateString()
    for (let i = 0; i < numOfDays; i += 1) {
      const date = new Date()
      date.setDate(date.getDate() + i)
      const currentDayLabel = date.toLocaleDateString()
      const currentDayKey = date.toLocaleDateString('sv')
      const isMonday = date.getDay() === 1
      const isLastDay = i === numOfDays - 1

      if (isMonday && i > 0) {
        data.push({
          label: `${firstDayOfWeek}${
            firstDayOfWeek !== lastDayOfWeek ? ` - ${lastDayOfWeek}` : ''
          }`,
          events: [...currentWeekEvents],
        })
        firstDayOfWeek = currentDayLabel
        currentWeekEvents = []
      }
      currentWeekEvents = currentWeekEvents.concat(eventsByDays[currentDayKey] || [])
      lastDayOfWeek = currentDayLabel

      if (isLastDay) {
        data.push({
          label: `${firstDayOfWeek}${!isMonday ? ` - ${lastDayOfWeek}` : ''}`,
          events: [...currentWeekEvents],
        })
      }
    }
  }

  const handleDeleteClick = useCallback(
    eventId => {
      deleteEvent(eventId)
    },
    [deleteEvent],
  )

  useEffect(() => {
    getEvents()
  }, [getEvents])

  return { data, displayType, handleDeleteClick }
}
