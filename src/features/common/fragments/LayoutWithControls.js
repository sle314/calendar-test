import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Layout } from 'core/ui'

import { LanguageSwitcher } from 'features/localization'

export const LayoutWithControls = ({ headerContentLeft, headerContentRight, children }) => (
  <Layout
    headerContentLeft={headerContentLeft}
    headerContentRight={
      <StyledContentRightDiv>
        {headerContentRight}
        <StyledLanguageSwitcherContainerDiv>
          <LanguageSwitcher />
        </StyledLanguageSwitcherContainerDiv>
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

const StyledLanguageSwitcherContainerDiv = styled.div`
  margin-left: ${({ theme }) => theme.space.medium};
  width: 20px;
  text-align: center;
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
