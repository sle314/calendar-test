import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Content = ({ children }) => <StyledContainerDiv>{children}</StyledContainerDiv>

const StyledContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${({ theme }) => theme.space.xlarge};
`

Content.propTypes = {
  children: PropTypes.node,
}

Content.defaultProps = {
  children: undefined,
}
