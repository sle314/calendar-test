import styled from 'styled-components'

import { CreateEvent, EventsList, EventsProvider } from 'features/events'

export const Events = () => (
  <EventsProvider>
    <StyledEventsListContainerDiv>
      <EventsList />
    </StyledEventsListContainerDiv>
    <StyledCreateEventContainerDiv>
      <h2>Add an event</h2>
      <CreateEvent />
    </StyledCreateEventContainerDiv>
  </EventsProvider>
)

const StyledEventsListContainerDiv = styled.div``

const StyledCreateEventContainerDiv = styled.div`
  margin-top: ${({ theme }) => theme.space.xlarge};
`
