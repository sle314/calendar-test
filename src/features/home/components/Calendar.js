import styled from 'styled-components'

import { CalendarProvider, NumberOfDays } from 'features/calendar'

import { Events } from './Events'

export const Calendar = () => (
  <CalendarProvider calendarId={`${process.env.REACT_APP_GOOGLE_CALENDAR_ID}`}>
    <StyledNumberOfDaysContainerDiv>
      <NumberOfDays />
    </StyledNumberOfDaysContainerDiv>
    <StyledEventsContainerDiv>
      <Events />
    </StyledEventsContainerDiv>
  </CalendarProvider>
)

const StyledNumberOfDaysContainerDiv = styled.div``

const StyledEventsContainerDiv = styled.div`
  margin-top: ${({ theme }) => theme.space.large};
`
