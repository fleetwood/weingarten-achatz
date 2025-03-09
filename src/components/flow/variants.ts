import { cva } from "class-variance-authority";

// Variant for the container background and text
export const containerVariants = cva("", {
  variants: {
    variant: {
      default: "bg-default text-default-foreground",
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      muted: "bg-muted text-muted-foreground",
      alt: "bg-alt text-alt-foreground",
      destructive: "bg-destructive text-destructive-foreground",
      none: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

// Variant for the title text
export const titleVariants = cva("", {
  variants: {
    variant: {
      default: "text-default-foreground",
      primary: "text-primary-foreground",
      secondary: "text-secondary-foreground",
      muted: "text-muted-foreground",
      alt: "text-alt-foreground",
      destructive: "text-destructive-foreground",
      none: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

// Variant for using background color as text color
export const bgAsTextVariants = cva("", {
  variants: {
    variant: {
      default: "text-default",
      primary: "text-primary",
      secondary: "text-secondary",
      muted: "text-muted",
      alt: "text-alt",
      destructive: "text-destructive",
      none: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
