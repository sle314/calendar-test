import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from 'features/auth'

export const Logout = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    logout()
    navigate('/login')
  }, [logout, navigate])

  return null
}
