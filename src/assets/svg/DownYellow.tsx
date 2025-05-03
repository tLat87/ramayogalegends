import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <Path
      fill="#FFDC00"
      d="M10.773 3.97a.75.75 0 0 0-1.06 0L6 7.682 2.287 3.97a.75.75 0 0 0-1.06 1.06L5.47 9.273a.75.75 0 0 0 1.06 0l4.243-4.243a.75.75 0 0 0 0-1.06Z"
    />
  </Svg>
)
export default SvgComponent
