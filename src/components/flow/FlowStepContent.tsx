import { cn } from "@/lib/utils";
import React from "react";
import { FlowStepContext, VariantType } from "./types";
// No variants import needed

// FlowStepContent component
export type FlowStepContentProps = {
  children: React.ReactNode;
  variant?: VariantType;
  className?: string;
};

// Helper function to get variant color with opacity
const getVariantColorWithOpacity = (variant: VariantType, opacity: number) => {
  if (variant === 'none') return undefined;
  
  switch (variant) {
    case 'default': return `hsla(var(--default), ${opacity})`;
    case 'primary': return `hsla(var(--primary), ${opacity})`;
    case 'secondary': return `hsla(var(--secondary), ${opacity})`;
    case 'muted': return `hsla(var(--muted), ${opacity})`;
    case 'alt': return `hsla(var(--alt), ${opacity})`;
    case 'destructive': return `hsla(var(--destructive), ${opacity})`;
    default: return undefined;
  }
};

// Helper function to get variant text color class
const getVariantTextColorClass = (variant: VariantType) => {
  if (variant === 'none') return "";
  
  switch (variant) {
    case 'default': return "text-default-foreground";
    case 'primary': return "text-primary-foreground";
    case 'secondary': return "text-secondary-foreground";
    case 'muted': return "text-muted-foreground";
    case 'alt': return "text-alt-foreground";
    case 'destructive': return "text-destructive-foreground";
    default: return "";
  }
};

// Helper function to get variant gradient class
const getVariantGradientClass = (variant: VariantType) => {
  if (variant === 'none') return "from-primary/10";
  
  switch (variant) {
    case 'default': return "from-default/10";
    case 'primary': return "from-primary/10";
    case 'secondary': return "from-secondary/10";
    case 'muted': return "from-muted/10";
    case 'alt': return "from-alt/10";
    case 'destructive': return "from-destructive/10";
    default: return "from-primary/10";
  }
};

export const FlowStepContent = (props: FlowStepContentProps) => {
  const { children, className, variant: propVariant } = props;
  const { variant: contextVariant } = React.useContext(FlowStepContext);
  const variant = propVariant || contextVariant;

  // Create custom style for background with reduced opacity
  const bgStyle = {
    backgroundColor: getVariantColorWithOpacity(variant, 0.3), // 30% opacity
  };

  return (
    <div className="flex justify-center items-center mt-2 sm:mt-4 mb-4">
      <div
        className={cn(
          "rounded-lg p-2 sm:p-4 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] max-h-[40vh] overflow-y-auto backdrop-blur-md shadow-lg relative",
          // Only use the text color from the variant, not the background
          getVariantTextColorClass(variant),
          className
        )}
        style={bgStyle}
      >
        {/* Add subtle gradient overlay */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br to-transparent to-60% rounded-lg -z-10",
          getVariantGradientClass(variant)
        )}></div>
        {children}
      </div>
    </div>
  );
};

FlowStepContent.displayName = "FlowStepContent";
