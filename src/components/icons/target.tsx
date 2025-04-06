export default function Target({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M16 2c-.553 0-1 .448-1 1v1.059C10.835 4.522 7.522 7.836 7.059 12H6c-.553 0-1 .448-1 1s.447 1 1 1h1.059c.463 4.164 3.776 7.478 7.941 7.941V23c0 .552.447 1 1 1s1-.448 1-1v-1.059c4.165-.463 7.478-3.777 7.941-7.941H26c.553 0 1-.448 1-1s-.447-1-1-1h-1.059C24.478 7.836 21.165 4.522 17 4.059V3c0-.552-.447-1-1-1zm7 11c0 3.86-3.141 7-7 7s-7-3.14-7-7 3.141-7 7-7 7 3.14 7 7z"/>
    </svg>
  );
}