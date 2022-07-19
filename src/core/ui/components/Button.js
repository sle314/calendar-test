import styled, { css } from 'styled-components'

export const buttonStyle = css`
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 8px 16px;
  background: ${({ theme }) => theme.colors.secondary};
  margin: 0;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
  line-height: 1;

  :hover {
    cursor: pointer;
    opacity: 0.5;
  }
`
export const Button = styled.button.attrs({ type: 'button' })`
  ${buttonStyle};
`
