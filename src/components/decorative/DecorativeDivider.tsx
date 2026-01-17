import { cn } from "@/lib/utils";

interface DecorativeDividerProps {
  className?: string;
}

export const DecorativeDivider = ({ className }: DecorativeDividerProps) => {
  return (
    <div className={cn("flex items-center justify-center gap-4 py-6", className)}>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="flex items-center gap-3">
        <span className="text-mustard text-lg">✦</span>
        <span className="text-pink-city text-xl">❋</span>
        <span className="text-maroon text-lg">◆</span>
        <span className="text-pink-city text-xl">❋</span>
        <span className="text-mustard text-lg">✦</span>
      </div>
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
};