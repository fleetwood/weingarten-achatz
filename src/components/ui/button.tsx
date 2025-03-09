import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        alt:
          "bg-alt text-alt-foreground shadow-xs hover:bg-alt/80",
        muted:
          "bg-muted text-muted-foreground shadow-xs hover:bg-muted/80",
        primary:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        none: "bg-transparent text-foreground hover:bg-accent/10",
        // Outline variants for each flow color
        'outline-default': "border border-default text-default bg-background shadow-xs hover:bg-default/10",
        'outline-primary': "border border-primary text-primary bg-background shadow-xs hover:bg-primary/10",
        'outline-secondary': "border border-secondary text-secondary bg-background shadow-xs hover:bg-secondary/10",
        'outline-muted': "border border-muted text-muted bg-background shadow-xs hover:bg-muted/10",
        'outline-alt': "border border-alt text-alt bg-background shadow-xs hover:bg-alt/10",
        'outline-destructive': "border border-destructive text-destructive bg-background shadow-xs hover:bg-destructive/10",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)


function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    variant?: string // Allow Flow variants to be passed in
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
