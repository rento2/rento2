export default function FavIcon ({ color = '#9E9FF5' }: { color?: string }): JSX.Element {
  return (
    <svg
      fill="none"
      height="18"
      viewBox="0 0 20 18"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.62 17.8101C10.28 17.9301 9.72 17.9301 9.38 17.8101C6.48 16.8201 0 12.6901 0 5.6901C0 2.6001 2.49 0.100098 5.56 0.100098C7.38 0.100098 8.99 0.980098 10 2.3401C11.01 0.980098 12.63 0.100098 14.44 0.100098C17.51 0.100098 20 2.6001 20 5.6901C20 12.6901 13.52 16.8201 10.62 17.8101Z"
        fill={ color }
      />
    </svg>
  )
}
