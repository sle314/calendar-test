import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Content } from './Content'
import { Header } from './Header'

export const Layout = ({ children, headerContentLeft, headerContentRight }) => (
  <StyledContainerDiv>
    {(headerContentLeft || headerContentRight) && (
      <Header contentLeft={headerContentLeft} contentRight={headerContentRight} />
    )}
    <Content>{children}</Content>
  </StyledContainerDiv>
)

const StyledContainerDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  padding-bottom: ${({ theme }) => theme.space.medium};
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  headerContentLeft: PropTypes.node,
  headerContentRight: PropTypes.node,
}

Layout.defaultProps = {
  headerContentLeft: undefined,
  headerContentRight: undefined,
}
