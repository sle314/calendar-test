import styled from 'styled-components'

import { CreateEvent, EventsList, EventsProvider } from 'features/events'
import { useLocalization } from 'features/localization'

export const Events = () => {
  const { translations } = useLocalization()

  return (
    <EventsProvider>
      <StyledEventsListContainerDiv>
        <EventsList />
      </StyledEventsListContainerDiv>
      <StyledCreateEventContainerDiv>
        <h2>{translations.addEvent}</h2>
        <CreateEvent />
      </StyledCreateEventContainerDiv>
    </EventsProvider>
  )
}

const StyledEventsListContainerDiv = styled.div``

const StyledCreateEventContainerDiv = styled.div`
  margin-top: ${({ theme }) => theme.space.xlarge};
`
