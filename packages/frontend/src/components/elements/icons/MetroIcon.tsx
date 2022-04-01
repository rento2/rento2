export default function MetroIcon ({ color }: { color: string }): JSX.Element {
  return (
    <svg
      fill="none"
      height="12"
      viewBox="0 0 16 12"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.8946 9.84245L11.1479 0.666504L7.98867 6.03135L4.82945 0.666504L1.08277 9.84538H0V11.2247H5.64191V9.84538H4.8068L5.61926 7.56605L7.98867 11.3332L10.3581 7.56605L11.1706 9.84538H10.3354V11.2247H16V9.84538L14.8946 9.84245Z"
        fill={ color }
      />
    </svg>
  )
}
