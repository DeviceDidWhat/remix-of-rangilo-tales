import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-body",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-carved",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-soft",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Palace-styled variants
        mustard: "bg-gradient-mustard text-foreground font-semibold shadow-carved hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0 border-2 border-mustard/30",
        maroon: "bg-gradient-maroon text-primary-foreground shadow-carved hover:brightness-110 border-2 border-maroon/30",
        peacock: "bg-peacock text-peacock-foreground hover:bg-peacock/90 shadow-carved",
        // Hero CTA - ornamental plaque style
        hero: "carved-plaque text-foreground text-lg px-10 py-6 rounded-xl font-display tracking-wide hover:brightness-110 hover:-translate-y-1 active:translate-y-0 animate-illuminate",
        // Carved panel button
        carved: "bg-ivory text-foreground border-2 border-border shadow-carved hover:border-mustard hover:shadow-lifted relative overflow-hidden",
        // Fabric swatch style
        fabric: "bg-cream text-foreground border-2 border-border silk-texture hover:border-pink-city shadow-soft hover:shadow-card",
        // Tile button
        tile: "bg-gradient-fresco text-foreground border border-border rounded-md shadow-soft hover:shadow-card hover:-translate-y-0.5 fresco-texture",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-12 rounded-lg px-8",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };