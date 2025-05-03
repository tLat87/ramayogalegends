import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      fill={props.color}
      d="M11.75 10.666a1 1 0 0 1 1-1h9.333a1 1 0 1 1 0 2H12.75a1 1 0 0 1-1-1Zm1 3a1 1 0 0 0 0 2h6.667a1 1 0 0 0 0-2H12.75Z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.083 4.333a6.333 6.333 0 0 0-6.333 6.334V24a5 5 0 0 0 5 5h14.667a2.333 2.333 0 0 0 2.333-2.333v-20a2.333 2.333 0 0 0-2.333-2.333H12.083ZM25.75 19V6.667a.333.333 0 0 0-.333-.333H12.083a4.333 4.333 0 0 0-4.333 4.333V20a4.973 4.973 0 0 1 3-1h15Zm0 2h-15a3 3 0 1 0 0 6h14.667a.333.333 0 0 0 .333-.333V21Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
