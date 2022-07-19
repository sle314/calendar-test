import styled from 'styled-components'

import { Button, Layout } from 'core/ui'

import { useAuth } from 'features/auth'

export const Login = () => {
  const { error, login } = useAuth()

  return (
    <Layout
      headerContentLeft={<h1>Welcome</h1>}
      headerContentRight={<Button onClick={login}>Login</Button>}
    >
      <StyledContentDiv>Hello hello! Please click LOGIN to get started.</StyledContentDiv>
      {error && <StyledErrorDiv>{error}</StyledErrorDiv>}
    </Layout>
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
