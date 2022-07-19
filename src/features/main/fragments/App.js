import { Route, Routes } from 'react-router-dom'

import { Route as RouteMapping } from 'core/common'

import { AuthLayout, PublicOnlyLayout } from 'features/auth'
import { Home } from 'features/home'
import { Login } from 'features/login'
import { Logout } from 'features/logout'

export const App = () => (
  <Routes>
    <Route element={<PublicOnlyLayout to={RouteMapping.Home} />}>
      <Route exact path={RouteMapping.Login} element={<Login />} />
    </Route>
    <Route element={<AuthLayout to={RouteMapping.Login} />}>
      <Route exact path={RouteMapping.Home} element={<Home />} />
    </Route>
    <Route element={<AuthLayout to={RouteMapping.Login} />}>
      <Route exact path={RouteMapping.Logout} element={<Logout />} />
    </Route>
  </Routes>
)
