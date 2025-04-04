import { cn } from "@/lib/utils";

interface HeaderTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function HeaderTitle({ children, className }: HeaderTitleProps) {
  return (
    <h2
      className={cn(
        "opacity-80 font-bold font-[Exo] text-6xl max-md:text-5xl",
        className
      )}
    >
      {children}
    </h2>
  );
}
