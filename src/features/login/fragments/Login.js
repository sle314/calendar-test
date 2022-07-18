import { Button, Layout } from 'core/ui'

import { useAuth } from 'features/auth'

export const Login = () => {
  const { login } = useAuth()

  return (
    <Layout>
      <h1>Welcome</h1>
      <Button onClick={login}>Login</Button>
    </Layout>
  )
}
