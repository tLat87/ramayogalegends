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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.678 20.005 1.144 2.46s5.143 1.092 5.143 3.69C25.965 28 23.677 28 23.677 28h-6.094l-3-1.667"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.822 20.005-1.143 2.46s-5.144 1.092-5.144 3.69C6.535 28 8.823 28 8.823 28h2.76l3-1.667L18.25 24"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.25 21.235s2.857-.615 4.572-1.23c1.713-8.61 6.855-7.996 7.428-7.996.573 0 5.715-.614 7.428 7.996 1.715.614 4.572 1.23 4.572 1.23m-12-11.902a2.667 2.667 0 1 0 0-5.333 2.667 2.667 0 0 0 0 5.333Z"
    />
  </Svg>
)
export default SvgComponent
