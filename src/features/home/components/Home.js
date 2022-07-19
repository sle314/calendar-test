import styled from 'styled-components'

import { Route } from 'core/common'
import { LinkButton } from 'core/ui'

import { LayoutWithControls } from 'features/common'
import { useLocalization } from 'features/localization'

import { Calendar } from './Calendar'

export const Home = () => {
  const { translations } = useLocalization()

  return (
    <LayoutWithControls
      headerContentLeft={<h1>{translations.homeTitle}</h1>}
      headerContentRight={<LinkButton to={Route.Logout}>{translations.logout}</LinkButton>}
    >
      <StyledCalendarContainerDiv>
        <Calendar />
      </StyledCalendarContainerDiv>
    </LayoutWithControls>
  )
}

const StyledCalendarContainerDiv = styled.div`
  width: 100%;
`
