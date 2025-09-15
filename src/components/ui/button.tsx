import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transition-all duration-300",
  {
    variants: {
      variant: {
        // Primary CTA - Black background, white text
        default: "bg-surface-black text-surface-white hover:bg-surface-dark rounded-2xl hover:shadow-lg hover:scale-[1.02]",
        
        // Secondary CTA - White background, black text with border
        secondary: "bg-surface-white text-surface-black border border-border-strong hover:bg-surface-light rounded-2xl hover:shadow-lg hover:scale-[1.02]",
        
        // Outline variant - transparent with border
        outline: "border border-border-strong bg-transparent hover:bg-surface-light text-foreground rounded-2xl hover:shadow-lg hover:scale-[1.02]",
        
        // Hero variant - Apple blue for CTAs
        hero: "bg-accent-blue text-white hover:bg-accent-blue-light rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] font-semibold",
        
        // Hero outline - for secondary hero CTA
        "hero-outline": "border-2 border-accent-blue text-accent-blue bg-transparent hover:border-surface-white hover:text-surface-white rounded-2xl hover:shadow-lg hover:scale-[1.02] font-semibold",
        
        // Accent variant with blue
        accent: "bg-accent-blue text-white hover:bg-accent-blue-light rounded-2xl hover:shadow-lg hover:scale-[1.02] font-semibold",
        
        // Ghost variant
        ghost: "hover:bg-surface-light hover:text-foreground rounded-2xl",
        
        // Link variant
        link: "text-primary underline-offset-4 hover:underline font-medium",
      },
      size: {
        sm: "h-9 px-4 py-2 text-sm",
        default: "h-12 px-6 py-3 text-base",
        lg: "h-14 px-8 py-4 text-lg",
        xl: "h-16 px-10 py-5 text-xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
