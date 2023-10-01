import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={35}
    height={28}
    viewBox="0 0 64 64"
    {...props}
  >
    <path
      fill="#ffffff"
      d="M60 52V4c0-2.211-1.789-4-4-4H14v54h42v8H10a4 4 0 0 1 0-8h2V0H8C5.789 0 4 1.789 4 4v54a6 6 0 0 0 6 6h49a1 1 0 1 0 0-2h-1v-8a2 2 0 0 0 2-2zM23 14h12a1 1 0 1 1 0 2H23a1 1 0 1 1 0-2zm19 14H23a1 1 0 1 1 0-2h19a1 1 0 1 1 0 2zm7-6H23a1 1 0 1 1 0-2h26a1 1 0 1 1 0 2z"
    />
  </svg>
)
export default SvgComponent
