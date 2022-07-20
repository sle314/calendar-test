import styled, { css } from 'styled-components'

import { Button, Spinner } from 'core/ui'

import { useLocalization } from 'features/localization'

import { EventListDisplayType } from '../constants'
import { useEvents, useEventsData } from '../hooks'

export const EventsList = () => {
  const { fetching } = useEvents()
  const { handleDeleteClick, data, displayType } = useEventsData()
  const { translations } = useLocalization()

  const isWeekly = displayType === EventListDisplayType.Week

  return fetching ? (
    <Spinner />
  ) : (
    <StyledEventsListDiv>
      {data.map(({ label, events, weekdayTranslationKey }) => (
        <StyledEventsColumnDiv key={label}>
          <StyledEventsColumnLabelDiv>
            {!isWeekly && weekdayTranslationKey !== undefined && (
              <StyledEventsDayDiv>{translations[weekdayTranslationKey]}</StyledEventsDayDiv>
            )}
            <StyledEventsLabelDiv>{label}</StyledEventsLabelDiv>
          </StyledEventsColumnLabelDiv>
          {events.length > 0 ? (
            <StyledEventsDiv>
              {events.map(event => (
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
                  <DeleteButton onClick={() => handleDeleteClick(event.id)}>
                    {translations.delete}
                  </DeleteButton>
                </StyledEventDiv>
              ))}
            </StyledEventsDiv>
          ) : (
            <StyledNoEventsDiv>{translations.noEvents}</StyledNoEventsDiv>
          )}
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
  border-right: 1px solid ${({ theme }) => theme.colors.primary};

  :last-child {
    border-right: none;
  }
`

const padding = css`
  padding: ${({ theme }) => theme.space.small};
`

const StyledEventsColumnLabelDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  ${padding};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  font-size: 1.4rem;
`

const StyledEventsDayDiv = styled.div`
  font-size: 1.2rem;
  margin-bottom: ${({ theme }) => theme.space.small};
  text-align: center;
  font-weight: 500;
`

const StyledEventsLabelDiv = styled.div`
  text-align: center;
`

const StyledEventsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 1.2rem;
  ${padding};
`

const StyledNoEventsDiv = styled(StyledEventsDiv)`
  align-items: center;
  font-size: 1.4rem;
`

const StyledEventDiv = styled.div`
  margin-bottom: ${({ theme }) => theme.space.medium};
  padding: ${({ theme }) => theme.space.small};
  background: ${({ theme }) => theme.colors.primary};
  width: 100%;
  max-width: 200px;
  color: ${({ theme }) => theme.colors.secondary};
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
