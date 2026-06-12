const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border bg-clip-padding text-sm font-medium whitespace-nowrap transition-colors outline-none select-none focus-visible:ring-2 focus-visible:ring-ring/40 active:translate-y-px disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90",

        outline:
          "border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",

        ghost:
          "hover:bg-accent hover:text-accent-foreground",

        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",

        link:
          "text-primary underline-offset-4 hover:underline",
      },

      size: {
        default: "h-9 px-3",
        sm: "h-8 px-2.5 text-xs",
        lg: "h-10 px-4",
        icon: "h-9 w-9",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);