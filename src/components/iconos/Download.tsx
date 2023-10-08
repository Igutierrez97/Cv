import * as React from "react"
import { SVGProps } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#FFFFFF" // Cambiar el color del trazo a blanco
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 16V8M9 13l2.913 2.913v0a.123.123 0 0 0 .174 0v0L15 13"
    />
    <path
      stroke="#FFFFFF" // Cambiar el color del trazo a blanco
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 15v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4"
    />
  </svg>
)

export default SvgComponent

