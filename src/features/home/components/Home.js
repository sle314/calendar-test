import styled from 'styled-components'

import { Layout, LinkButton } from 'core/ui'

import { Calendar } from './Calendar'

export const Home = () => (
  <Layout
    headerContentLeft={<h1>Your Calendar</h1>}
    headerContentRight={<LinkButton to="/logout">Logout</LinkButton>}
  >
    <StyledCalendarContainerDiv>
      <Calendar />
    </StyledCalendarContainerDiv>
  </Layout>
)

const StyledCalendarContainerDiv = styled.div`
  width: 100%;
`
