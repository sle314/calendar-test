import styled from 'styled-components'

export const Svg = styled.svg.attrs(({ viewBoxWidth, viewBoxHeight, ...rest }) => ({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  viewBox: `0 0 ${viewBoxWidth} ${viewBoxHeight}`,
  width: viewBoxWidth,
  height: viewBoxHeight,
  ...rest,
}))``
