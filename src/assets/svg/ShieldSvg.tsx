import * as React from "react"
import Svg, { SvgProps, Mask, Path, G } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={32}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={27}
      height={30}
      x={3}
      y={1}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path
        fill="#fff"
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m4.5 6.17 12.006-3.503L28.5 6.17v7.186A17.546 17.546 0 0 1 16.502 30 17.546 17.546 0 0 1 4.5 13.352V6.17Z"
      />
      <Path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.5 15.333 15.167 20l8-8"
      />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#fff" d="M.5 0h32v32H.5V0Z" />
    </G>
  </Svg>
)
export default SvgComponent
