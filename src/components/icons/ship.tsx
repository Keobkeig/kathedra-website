export default function Ship({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M512 259.65v-7.821h-49.01v-56.31H303.446v-23.984h-135.56v104.277h-15.642V155.894H64.652v-8.342h87.593V131.91h-32.326V83.943h-15.642v47.967H49.01v39.625h87.593v7.299h-32.326v15.642h32.326v81.336H8.342v7.821c0 26.261 12.651 49.591 32.166 64.13H0v15.642h510.957v-15.642h-48.503c6.771-4.236 13.111-9.288 18.917-15.119C500.969 312.961 512 287.038 512 259.65z"/>
    </svg>
  );
}