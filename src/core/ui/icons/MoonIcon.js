import styled, { css } from 'styled-components'

import { Svg } from '../components'

const style = css`
  height: 25px;
  width: auto;
`

export const MoonIcon = styled(props => (
  <Svg viewBoxWidth={482.72} viewBoxHeight={482.72} {...props}>
    <g>
      <path
        fill="currentColor"
        d="M463.367,326.16c-29.955,13.631-62.497,20.644-95.408,20.56c-128.072-0.141-231.859-103.928-232-232
        c-0.089-32.91,6.918-65.452,20.544-95.408L165.303,0l-19.344,8.704C57.159,48.811,0.073,137.201,0.041,234.638
        C-0.004,371.604,110.992,482.675,247.959,482.72c97.472-0.063,185.883-57.174,226.016-146l8.704-19.36L463.367,326.16z
        M361.974,436.785C250.394,499.772,108.88,460.38,45.893,348.8S22.299,95.707,133.879,32.72c-9.274,26.342-13.981,54.074-13.92,82
        c0.159,136.901,111.099,247.841,248,248c27.926,0.061,55.658-4.646,82-13.92C429.189,385.593,398.767,416.016,361.974,436.785z"
      />
    </g>
  </Svg>
))`
  ${style};
`
