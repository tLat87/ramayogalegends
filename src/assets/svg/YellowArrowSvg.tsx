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
      fill="#FFDC00"
      d="M24.326 6.726a2.933 2.933 0 0 1 4.148 0l13.2 13.2a2.933 2.933 0 0 1 0 4.148l-13.2 13.2a2.934 2.934 0 0 1-4.148-4.148l7.94-8.193H4.4a2.933 2.933 0 1 1 0-5.866h27.867l-7.94-8.193a2.934 2.934 0 0 1 0-4.148Z"
    />
  </Svg>
)
export default SvgComponent
