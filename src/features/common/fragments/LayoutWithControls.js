import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Layout } from 'core/ui'

import { LanguageSwitcher } from 'features/localization'
import { ThemeSwitcher } from 'features/theme'

export const LayoutWithControls = ({ headerContentLeft, headerContentRight, children }) => (
  <Layout
    headerContentLeft={headerContentLeft}
    headerContentRight={
      <StyledContentRightDiv>
        {headerContentRight}
        <StyledSwitcherContainerDiv>
          <LanguageSwitcher />
        </StyledSwitcherContainerDiv>
        <StyledSwitcherContainerDiv>
          <ThemeSwitcher />
        </StyledSwitcherContainerDiv>
      </StyledContentRightDiv>
    }
  >
    {children}
  </Layout>
)

const StyledContentRightDiv = styled.div`
  display: flex;
  align-items: center;
`

const StyledSwitcherContainerDiv = styled.div`
  margin-left: ${({ theme }) => theme.space.medium};
  width: auto;
  text-align: center;
  width: 30px;
`

LayoutWithControls.propTypes = {
  headerContentLeft: PropTypes.node,
  headerContentRight: PropTypes.node,
  children: PropTypes.node,
}

LayoutWithControls.defaultProps = {
  headerContentLeft: undefined,
  headerContentRight: undefined,
  children: undefined,
}
