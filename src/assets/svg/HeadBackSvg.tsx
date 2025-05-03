import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M19 21V3a1.002 1.002 0 0 0-1.569-.823l-13 9c-.539.373-.539 1.27 0 1.645l13 9a.998.998 0 0 0 1.57-.822Z"
    />
  </Svg>
)
export default SvgComponent
