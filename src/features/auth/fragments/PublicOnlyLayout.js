import { Navigate, Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'

import { useAuth } from '../hooks'

export const PublicOnlyLayout = ({ to }) => {
  const { isAuthorized } = useAuth()

  return !isAuthorized ? <Outlet /> : <Navigate to={to} />
}

PublicOnlyLayout.propTypes = {
  to: PropTypes.string,
}

PublicOnlyLayout.defaultProps = {
  to: '/',
}
