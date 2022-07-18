import styled from 'styled-components'

import { Layout, LinkButton } from 'core/ui'

import { Calendar } from './Calendar'

export const Home = () => (
  <Layout>
    <StyledLogoutContainerDiv>
      <LinkButton to="/logout">Logout</LinkButton>
    </StyledLogoutContainerDiv>
    <StyledCalendarContainerDiv>
      <h1>Your Calendar</h1>
      <Calendar />
    </StyledCalendarContainerDiv>
  </Layout>
)

const StyledCalendarContainerDiv = styled.div`
  width: 100%;
`

const StyledLogoutContainerDiv = styled.div`
  display: flex;
`
