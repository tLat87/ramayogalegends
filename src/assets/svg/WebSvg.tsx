import * as React from "react"
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={36}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={33}
      height={26}
      x={2}
      y={5}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M31.25 6H5.75A2.25 2.25 0 0 0 3.5 8.25v19.5A2.25 2.25 0 0 0 5.75 30h25.5a2.25 2.25 0 0 0 2.25-2.25V8.25A2.25 2.25 0 0 0 31.25 6Z"
      />
      <Path
        fill="#fff"
        stroke="#fff"
        strokeWidth={2}
        d="M3.5 8.25A2.25 2.25 0 0 1 5.75 6h25.5a2.25 2.25 0 0 1 2.25 2.25V15h-30V8.25Z"
      />
      <Path
        fill="#000"
        d="M6.5 10.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM11 10.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
      />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#fff" d="M.5 0h36v36H.5V0Z" />
    </G>
  </Svg>
)
export default SvgComponent
