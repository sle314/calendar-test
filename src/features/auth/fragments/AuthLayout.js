import { Navigate, Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Route } from 'core/common'

import { useAuth } from '../hooks'

export const AuthLayout = ({ to }) => {
  const { isAuthorized } = useAuth()

  return isAuthorized ? <Outlet /> : <Navigate to={to} />
}

AuthLayout.propTypes = {
  to: PropTypes.string,
}

AuthLayout.defaultProps = {
  to: Route.Login,
}
