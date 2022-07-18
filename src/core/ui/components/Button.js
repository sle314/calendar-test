import styled, { css } from 'styled-components'

export const buttonStyle = css`
  border: 1px solid black;
  padding: 8px 16px;
  background: white;
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
