import styled from 'styled-components'

import { Button } from 'core/ui'

import { useAuth } from 'features/auth'
import { LayoutWithControls } from 'features/common'
import { useLocalization } from 'features/localization'

export const Login = () => {
  const { error, login } = useAuth()
  const { translations } = useLocalization()

  return (
    <LayoutWithControls
      headerContentLeft={<h1>{translations.loginTitle}</h1>}
      headerContentRight={<Button onClick={login}>{translations.login}</Button>}
    >
      <StyledContentDiv>{translations.loginMessage}</StyledContentDiv>
      {error && <StyledErrorDiv>{error}</StyledErrorDiv>}
    </LayoutWithControls>
  )
}

const StyledContentDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  padding-top: ${({ theme }) => theme.space.xlarge};
`

const StyledErrorDiv = styled.div`
  margin-top: ${({ theme }) => theme.space.large};
  color: red;
`
