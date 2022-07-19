import styled from 'styled-components'

import { Button, Layout } from 'core/ui'

import { useAuth } from 'features/auth'

export const Login = () => {
  const { error, login } = useAuth()

  return (
    <Layout>
      <h1>Welcome</h1>
      <Button onClick={login}>Login</Button>
      {error && <ErrorDiv>{error}</ErrorDiv>}
    </Layout>
  )
}

const ErrorDiv = styled.div`
  margin-top: ${({ theme }) => theme.space.large};
  color: red;
`
