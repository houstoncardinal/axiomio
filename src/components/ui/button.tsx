import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg border border-primary/20",
        destructive: "rounded-xl bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md",
        outline: "rounded-xl border-2 border-border bg-transparent hover:bg-muted/50 hover:border-primary/40 text-foreground backdrop-blur-sm",
        secondary: "rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm",
        ghost: "rounded-xl hover:bg-muted/80 hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Premium hero button with layered depth and ripple-ready
        hero: [
          "relative rounded-2xl font-semibold tracking-wide overflow-hidden",
          "bg-gradient-to-b from-primary via-primary to-primary/90",
          "text-primary-foreground",
          "shadow-[0_4px_20px_-4px_hsl(var(--primary)/0.5),inset_0_1px_0_hsl(var(--primary-foreground)/0.15),inset_0_-2px_4px_hsl(var(--primary)/0.3)]",
          "hover:shadow-[0_8px_30px_-4px_hsl(var(--primary)/0.6),inset_0_1px_0_hsl(var(--primary-foreground)/0.2),inset_0_-2px_4px_hsl(var(--primary)/0.3)]",
          "hover:translate-y-[-2px]",
          "active:translate-y-[1px] active:shadow-[0_2px_10px_-4px_hsl(var(--primary)/0.4),inset_0_2px_4px_hsl(var(--primary)/0.3)]",
          "border border-primary/30",
          "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-white/10 before:to-transparent before:pointer-events-none",
          "after:absolute after:inset-0 after:rounded-2xl after:opacity-0 after:bg-[radial-gradient(circle_at_center,hsl(var(--primary-foreground)/0.3)_0%,transparent_70%)] after:transition-opacity after:duration-500 hover:after:opacity-100",
        ].join(" "),
        // Elegant outline with glow effect
        "hero-outline": [
          "relative rounded-2xl font-medium tracking-wide overflow-hidden",
          "border-2 border-primary/30 bg-background/50",
          "text-foreground backdrop-blur-md",
          "shadow-[0_0_20px_-8px_hsl(var(--primary)/0.3)]",
          "hover:border-primary/60 hover:bg-primary/5",
          "hover:shadow-[0_0_30px_-8px_hsl(var(--primary)/0.5)]",
          "hover:translate-y-[-1px]",
          "active:translate-y-[1px]",
          "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-primary/5 before:to-transparent before:pointer-events-none",
          "after:absolute after:inset-0 after:rounded-2xl after:opacity-0 after:bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.15)_0%,transparent_70%)] after:transition-opacity after:duration-500 hover:after:opacity-100",
        ].join(" "),
        // Glass morphism luxury
        glass: [
          "relative rounded-2xl font-medium overflow-hidden",
          "bg-background/40 backdrop-blur-xl",
          "text-foreground",
          "border border-border/50",
          "shadow-[0_8px_32px_-8px_hsl(var(--foreground)/0.1),inset_0_1px_0_hsl(var(--background)/0.5)]",
          "hover:bg-background/60 hover:border-primary/30",
          "hover:shadow-[0_12px_40px_-8px_hsl(var(--primary)/0.2),inset_0_1px_0_hsl(var(--background)/0.6)]",
          "hover:translate-y-[-1px]",
          "after:absolute after:inset-0 after:rounded-2xl after:opacity-0 after:bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.1)_0%,transparent_70%)] after:transition-opacity after:duration-500 hover:after:opacity-100",
        ].join(" "),
        // Animated gradient premium with shimmer
        premium: [
          "relative rounded-2xl font-semibold tracking-wide overflow-hidden",
          "bg-[length:200%_100%] bg-gradient-to-r from-primary via-accent to-primary",
          "text-primary-foreground",
          "shadow-[0_4px_24px_-4px_hsl(var(--primary)/0.5),inset_0_1px_0_hsl(var(--primary-foreground)/0.2)]",
          "hover:shadow-[0_8px_36px_-4px_hsl(var(--primary)/0.6),inset_0_1px_0_hsl(var(--primary-foreground)/0.25)]",
          "animate-gradient-x",
          "hover:translate-y-[-2px]",
          "active:translate-y-[1px]",
          "border border-primary/20",
          "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/15 before:to-transparent before:pointer-events-none",
          "after:absolute after:inset-0 after:rounded-2xl after:opacity-0 after:bg-[radial-gradient(circle_at_center,hsl(var(--primary-foreground)/0.4)_0%,transparent_70%)] after:transition-opacity after:duration-500 hover:after:opacity-100",
        ].join(" "),
        // Luxury bronze accent with depth
        luxury: [
          "relative rounded-2xl font-semibold tracking-wide overflow-hidden",
          "bg-gradient-to-b from-accent via-accent to-accent/90",
          "text-accent-foreground",
          "shadow-[0_4px_20px_-4px_hsl(var(--accent)/0.5),inset_0_1px_0_hsl(var(--accent-foreground)/0.1),inset_0_-2px_4px_hsl(var(--accent)/0.3)]",
          "hover:shadow-[0_8px_30px_-4px_hsl(var(--accent)/0.6),inset_0_1px_0_hsl(var(--accent-foreground)/0.15)]",
          "hover:translate-y-[-2px]",
          "active:translate-y-[1px]",
          "border border-accent/30",
          "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-white/10 before:to-transparent before:pointer-events-none",
          "after:absolute after:inset-0 after:rounded-2xl after:opacity-0 after:bg-[radial-gradient(circle_at_center,hsl(var(--accent-foreground)/0.3)_0%,transparent_70%)] after:transition-opacity after:duration-500 hover:after:opacity-100",
        ].join(" "),
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-xl px-4 text-xs",
        lg: "h-13 px-8 text-base rounded-2xl",
        xl: "h-14 px-10 text-base rounded-2xl font-semibold",
        icon: "h-11 w-11 rounded-xl",
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
  enableRipple?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, enableRipple = true, onClick, ...props }, ref) => {
    const [ripples, setRipples] = React.useState<{ x: number; y: number; id: number }[]>([]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (enableRipple && !asChild) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const id = Date.now();
        
        setRipples((prev) => [...prev, { x, y, id }]);
        setTimeout(() => {
          setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
        }, 600);
      }
      onClick?.(e);
    };

    if (asChild) {
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }), "relative overflow-hidden")}
        ref={ref}
        onClick={handleClick}
        {...props}
      >
        {props.children}
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full bg-current pointer-events-none"
            initial={{ width: 0, height: 0, opacity: 0.4, x: ripple.x, y: ripple.y }}
            animate={{ width: 300, height: 300, opacity: 0, x: ripple.x - 150, y: ripple.y - 150 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ transformOrigin: "center" }}
          />
        ))}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
