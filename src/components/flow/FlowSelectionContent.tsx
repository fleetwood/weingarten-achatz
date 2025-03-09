import { cn } from "@/lib/utils";
import React from "react";
import { FlowStepContext, VariantType } from "./types";
import { titleVariants } from "./variants";

// FlowSelectionContent component
export type FlowSelectionContentProps = {
  children: React.ReactNode;
  className?: string;
  variant?: VariantType;
};

export const FlowSelectionContent = (props: FlowSelectionContentProps) => {
  const { children, className, variant: propVariant } = props;
  const { variant: contextVariant } = React.useContext(FlowStepContext);
  const variant = propVariant || contextVariant;
  
  // Create style object for variant-based background and text colors
  const variantStyle = variant !== 'none' ? {
    backgroundColor: variant !== 'default' ? `hsla(var(--${variant}), 0.1)` : undefined,
    color: `hsl(var(--${variant}-foreground))`,
    textShadow: `1px 1px 2px hsla(var(--licorice), 0.6)`
  } : undefined;
  
  return (
    <div 
      className={cn(
        "p-2 text-sm sm:text-base flex items-center justify-center h-full relative z-10 backdrop-blur-sm", 
        variant !== 'none' ? titleVariants({ variant }) : "text-[hsl(var(--platinum))]",
        className
      )}
      style={variantStyle}
    >
      {children}
    </div>
  );
};

FlowSelectionContent.displayName = "FlowSelectionContent";
