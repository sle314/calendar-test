import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Header = ({ contentLeft, contentRight }) => (
  <StyledHeader>
    <StyledContentLeftDiv>{contentLeft || <h1>Calendar</h1>}</StyledContentLeftDiv>
    <StyledContentRightDiv>{contentRight}</StyledContentRightDiv>
  </StyledHeader>
)

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  /* height: 70px; */
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => `0 ${theme.space.xlarge}`};
`

const StyledContentLeftDiv = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-start;
  align-items: center;
`

const StyledContentRightDiv = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
  align-items: center;
`

Header.propTypes = {
  contentLeft: PropTypes.node,
  contentRight: PropTypes.node,
}

Header.defaultProps = {
  contentLeft: undefined,
  contentRight: undefined,
}
