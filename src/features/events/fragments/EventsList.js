import styled, { css } from 'styled-components'

import { Button, Spinner } from 'core/ui'

import { EventListDisplayType } from '../constants'
import { useEvents, useEventsData } from '../hooks'

export const EventsList = () => {
  const { fetching } = useEvents()
  const { handleDeleteClick, data, displayType } = useEventsData()

  const isWeekly = displayType === EventListDisplayType.Week

  return fetching ? (
    <Spinner />
  ) : (
    <StyledEventsListDiv>
      {data.map(({ label, events }) => (
        <StyledEventsColumnDiv key={label}>
          <StyledEventsColumnLabelDiv>{label}</StyledEventsColumnLabelDiv>
          <StyledEventsDiv>
            {events.length > 0
              ? events.map(event => (
                  <StyledEventDiv key={event.id}>
                    <StyledEventNameDiv>{event.summary}</StyledEventNameDiv>
                    {isWeekly && (
                      <StyledEventDateDiv>
                        {new Date(event.start.dateTime).toLocaleDateString()}
                      </StyledEventDateDiv>
                    )}
                    <StyledEventTimeDiv>
                      {`${new Date(event.start.dateTime).toLocaleTimeString()} - ${new Date(
                        event.end.dateTime,
                      ).toLocaleTimeString()}`}
                    </StyledEventTimeDiv>
                    <DeleteButton onClick={() => handleDeleteClick(event.id)}>Delete</DeleteButton>
                  </StyledEventDiv>
                ))
              : 'No events'}
          </StyledEventsDiv>
        </StyledEventsColumnDiv>
      ))}
    </StyledEventsListDiv>
  )
}

const StyledEventsListDiv = styled.div`
  display: flex;
`

const StyledEventsColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-right: 1px solid black;

  :last-child {
    border-right: none;
  }
`

const padding = css`
  padding: ${({ theme }) => theme.space.small};
`

const StyledEventsColumnLabelDiv = styled.div`
  display: flex;
  justify-content: center;
  ${padding};
  margin-bottom: ${({ theme }) => theme.space.small};
  border-bottom: 1px solid black;
  font-size: 1.4rem;
`

const StyledEventsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.2rem;
  ${padding};
`

const StyledEventDiv = styled.div`
  margin-bottom: ${({ theme }) => theme.space.medium};
  padding: ${({ theme }) => theme.space.small};
  background: lightblue;
  width: 100%;
  max-width: 200px;
`

const StyledEventNameDiv = styled.div`
  margin-bottom: ${({ theme }) => theme.space.xsmall};
  font-weight: 500;
  font-size: 1.3rem;
`
const StyledEventDateDiv = styled.div``
const StyledEventTimeDiv = styled.div``

const DeleteButton = styled(Button)`
  padding: ${({ theme }) => theme.space.xsmall};
  margin-top: ${({ theme }) => theme.space.xsmall};
`
