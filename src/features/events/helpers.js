import { WEEK_START_DAY, WeekdayTranslationKey } from 'features/calendar'

export const getEventsDataDaily = (numOfDays, events) => {
  const data = []

  for (let i = 0; i < numOfDays; i += 1) {
    const date = new Date()
    date.setDate(date.getDate() + i)
    data.push({
      weekdayTranslationKey: WeekdayTranslationKey[date.getDay()],
      label: date.toLocaleDateString(),
      events: events[date.toLocaleDateString('sv')] || [],
    })
  }

  return data
}

export const getEventsDataWeekly = (numOfDays, events) => {
  const data = []
  let currentWeekEvents = []
  let firstDayOfWeek = new Date().toLocaleDateString()
  let lastDayOfWeek = firstDayOfWeek

  for (let i = 0; i < numOfDays; i += 1) {
    const date = new Date()
    date.setDate(date.getDate() + i)
    const currentDayLabel = date.toLocaleDateString()
    const currentDayKey = date.toLocaleDateString('sv')
    const isWeekStartDay = date.getDay() === WEEK_START_DAY
    const isLastDay = i === numOfDays - 1

    // if monday and not first day, end week
    if (isWeekStartDay && i > 0) {
      data.push({
        label: `${firstDayOfWeek}${firstDayOfWeek !== lastDayOfWeek ? ` - ${lastDayOfWeek}` : ''}`,
        events: [...currentWeekEvents],
      })
      firstDayOfWeek = currentDayLabel
      currentWeekEvents = []
    }

    currentWeekEvents = currentWeekEvents.concat(events[currentDayKey] || [])
    lastDayOfWeek = currentDayLabel

    // if last day, end week
    if (isLastDay) {
      data.push({
        label: `${firstDayOfWeek}${!isWeekStartDay ? ` - ${lastDayOfWeek}` : ''}`,
        events: [...currentWeekEvents],
      })
    }
  }

  return data
}
