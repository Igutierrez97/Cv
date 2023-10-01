import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="M20.733 4h-16c-1.1 0-1.99.9-1.99 2l-.01 12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.733 0h24v24h-24z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
