import { cva } from "class-variance-authority";
import { VariantType } from "./types";

export const getVariantColor = (variant: VariantType) => {
  switch (variant) {
    case 'default'    : return 'hsl(var(--default))';
    case 'primary'    : return 'hsl(var(--primary))';
    case 'secondary'  : return 'hsl(var(--secondary))';
    case 'muted'      : return 'hsl(var(--muted))';
    case 'alt'        : return 'hsl(var(--alt))';
    case 'destructive': return 'hsl(var(--destructive))';
         default      : return 'hsl(var(--licorice))';
  }
};

export const getBackgroundColorWithOpacity = (variant: VariantType, opacity: number) => {
  if (variant === 'none') return `hsla(var(--background), ${opacity})`;
  
  switch (variant) {
    case 'default'    : return `hsla(var(--default), ${opacity})`;
    case 'primary'    : return `hsla(var(--primary), ${opacity})`;
    case 'secondary'  : return `hsla(var(--secondary), ${opacity})`;
    case 'muted'      : return `hsla(var(--muted), ${opacity})`;
    case 'alt'        : return `hsla(var(--alt), ${opacity})`;
    case 'destructive': return `hsla(var(--destructive), ${opacity})`;
         default      : return `hsla(var(--background), ${opacity})`;
  }
};

export const getBackgroundColor = (variant: VariantType, opacity: number) => {
  if (variant === 'none') return `hsla(var(--licorice), ${opacity})`;
  
  switch (variant) {
    case 'default'    : return `hsla(var(--default), ${opacity})`;
    case 'primary'    : return `hsla(var(--primary), ${opacity})`;
    case 'secondary'  : return `hsla(var(--secondary), ${opacity})`;
    case 'muted'      : return `hsla(var(--muted), ${opacity})`;
    case 'alt'        : return `hsla(var(--alt), ${opacity})`;
    case 'destructive': return `hsla(var(--destructive), ${opacity})`;
         default      : return `hsla(var(--licorice), ${opacity})`;
  }
};

export const getShadowColor = (shadowVariant: 'default' | 'secondary' | 'muted' | 'alt' | 'destructive' | 'none' = 'default') => {
  switch (shadowVariant) {
    case 'default': 
      return 'hsla(var(--default), 0.8)';
    case 'secondary': 
      return 'hsla(var(--secondary), 0.8)';
    case 'muted': 
      return 'hsla(var(--muted), 0.8)';
    case 'alt': 
      return 'hsla(var(--alt), 0.8)';
    case 'destructive': 
      return 'hsla(var(--destructive), 0.8)';
    case 'none': 
      return 'transparent';
    default: 
      return 'hsla(var(--default), 0.8)';
  }
};

export const getVariantColorWithOpacity = (variant: VariantType, opacity: number) => {
  if (variant === 'none') return undefined;
  
  switch (variant) {
    case 'default'    : return `hsla(var(--default), ${opacity})`;
    case 'primary'    : return `hsla(var(--primary), ${opacity})`;
    case 'secondary'  : return `hsla(var(--secondary), ${opacity})`;
    case 'muted'      : return `hsla(var(--muted), ${opacity})`;
    case 'alt'        : return `hsla(var(--alt), ${opacity})`;
    case 'destructive': return `hsla(var(--destructive), ${opacity})`;
         default      : return undefined;
  }
};

export const getVariantTextColorClass = (variant: VariantType) => {
  if (variant === 'none') return "";
  
  switch (variant) {
    case 'default'    : return "text-default-foreground";
    case 'primary'    : return "text-primary-foreground";
    case 'secondary'  : return "text-secondary-foreground";
    case 'muted'      : return "text-muted-foreground";
    case 'alt'        : return "text-alt-foreground";
    case 'destructive': return "text-destructive-foreground";
         default      : return "";
  }
};

export const getVariantGradientClass = (variant: VariantType) => {
  if (variant === 'none') return "from-primary/10";
  
  switch (variant) {
    case 'default'    : return "from-default/10";
    case 'primary'    : return "from-primary/10";
    case 'secondary'  : return "from-secondary/10";
    case 'muted'      : return "from-muted/10";
    case 'alt'        : return "from-alt/10";
    case 'destructive': return "from-destructive/10";
         default      : return "from-primary/10";
  }
};

export const containerVariants = cva("", {
  variants: {
    variant: {
      default    : "bg-background text-foreground",
      primary    : "bg-primary text-primary-foreground",
      secondary  : "bg-secondary text-secondary-foreground",
      muted      : "bg-muted text-muted-foreground",
      alt        : "bg-alt text-alt-foreground",
      destructive: "bg-destructive text-destructive-foreground",
      none       : "bg-transparent"
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const titleVariants = cva("", {
  variants: {
    variant: {
      default    : "text-default-foreground",
      primary    : "text-primary-foreground",
      secondary  : "text-secondary-foreground",
      muted      : "text-muted-foreground",
      alt        : "text-alt-foreground",
      destructive: "text-destructive-foreground",
      none       : "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const titleForegroundVariants = cva("", {
  variants: {
    variant: {
      default    : "text-default-foreground",
      primary    : "text-primary-foreground",
      secondary  : "text-secondary-foreground",
      muted      : "text-muted-foreground",
      alt        : "text-alt-foreground",
      destructive: "text-destructive-foreground",
      none       : "text-white",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export const bgAsTextVariants = cva("", {
  variants: {
    variant: {
      default    : "text-background",
      primary    : "text-primary",
      secondary  : "text-secondary",
      muted      : "text-muted",
      alt        : "text-alt",
      destructive: "text-destructive",
      none       : ""
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
