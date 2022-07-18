import { Link as RouterLink } from 'react-router-dom'
import styled from 'styled-components'

import { buttonStyle } from './Button'

export const LinkButton = styled(RouterLink)`
  ${buttonStyle};

  color: black;
  text-decoration: none;
`
