import { useCallback } from 'react'
import styled from 'styled-components'

import { Select } from 'core/ui'

import { useLocalization } from 'features/localization'

import { Days, DEFAULT_NUMBER_OF_DAYS } from '../constants'
import { useCalendar } from '../hooks'

const OPTIONS = [
  { value: Days.One, label: Days.One },
  { value: Days.Seven, label: Days.Seven },
  { value: Days.Thirty, label: Days.Thirty },
]

export const NumberOfDays = () => {
  const { setNumOfDays } = useCalendar()
  const { translations } = useLocalization()

  const handleChange = useCallback(
    event => {
      setNumOfDays(event.currentTarget.value)
    },
    [setNumOfDays],
  )

  return (
    <StyledContainerDiv>
      <LabelDiv>{translations.daysToShow}</LabelDiv>
      <Select onChange={handleChange} options={OPTIONS} defaultValue={DEFAULT_NUMBER_OF_DAYS} />
    </StyledContainerDiv>
  )
}

const StyledContainerDiv = styled.div`
  display: flex;
  align-items: center;
`

const LabelDiv = styled.span`
  margin-right: 8px;
`
