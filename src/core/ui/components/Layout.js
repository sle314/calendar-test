import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Layout = ({ children }) => <StyledDiv>{children}</StyledDiv>

const StyledDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;
  padding: ${({ theme }) => theme.space.medium};
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
