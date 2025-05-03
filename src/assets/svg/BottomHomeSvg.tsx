import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="m23.296 4.204 16.5 16.5c1.155 1.155.337 3.13-1.296 3.13h-1.833v11a5.5 5.5 0 0 1-5.5 5.5h-1.834V27.5a5.5 5.5 0 0 0-5.177-5.49l-.323-.01h-3.666a5.5 5.5 0 0 0-5.5 5.5v12.833h-1.834a5.5 5.5 0 0 1-5.5-5.5v-11H5.5c-1.632 0-2.451-1.974-1.296-3.13l16.5-16.5a1.833 1.833 0 0 1 2.592 0Zm.537 21.463a1.833 1.833 0 0 1 1.834 1.833v12.833h-7.334V27.5a1.833 1.833 0 0 1 1.62-1.82l.214-.013h3.666Z"
    />
  </Svg>
)
export default SvgComponent
