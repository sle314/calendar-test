export const API_BASE_URL = 'https://www.googleapis.com/calendar/v3'

export const Days = {
  One: '1',
  Seven: '7',
  Thirty: '30',
}

export const DEFAULT_NUMBER_OF_DAYS = Days.Seven

const Weekday = {
  Sunday: 0,
  Monday: 1,
  Tuesday: 2,
  Wednesday: 3,
  Thursday: 4,
  Friday: 5,
  Saturday: 6,
}

export const WEEK_START_DAY = Weekday.Monday

export const WeekdayTranslationKey = {
  [Weekday.Monday]: 'monday',
  [Weekday.Tuesday]: 'tuesday',
  [Weekday.Wednesday]: 'wednesday',
  [Weekday.Thursday]: 'thursday',
  [Weekday.Friday]: 'friday',
  [Weekday.Saturday]: 'saturday',
  [Weekday.Sunday]: 'sunday',
}
