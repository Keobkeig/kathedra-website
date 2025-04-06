export default function Briefcase({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M30 5.984h-7.988v-1.938c0-1.655-1.346-3-3-3h-6.014c-1.655 0-3 1.345-3 3v1.938h-7.999c-1.099 0-2 .901-2 2v7.008h-.001v2h.001v11.963c0 1.099.9 2 2 2h28c1.099 0 2-.901 2-2v-20.971c0-1.099-.901-2-2-2zm-18.001-1.938c0-.552.448-1 1-1h6.013c.552 0 1 .448 1 1v1.938h-8.014v-1.938zm-9.998 3.938h28v7.008h-11.012v-1.024c0-1.102-.898-2-2-2h-1.992c-1.102 0-2 .898-2 2v1.024h-10.996v-7.008zm14.989 11.02h-1.994v-5.036h1.992v5.036zm-14.99 9.95v-11.963h10.996v2.012c0 1.102.897 2 2 2h1.992c1.102 0 2-.898 2-2v-2.012h11.012v11.963h-28z"/>
    </svg>
  );
}