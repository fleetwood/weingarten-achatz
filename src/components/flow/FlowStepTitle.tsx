import { cn } from "@/lib/utils";
import React from "react";
import { FlowStepContext, VariantType } from "./types";
import { titleVariants } from "./variants";

// FlowStepTitle component
export type FlowStepTitleProps = {
  children: React.ReactNode;
  variant?: VariantType;
  className?: string;
  shadow?: 'default' | 'secondary' | 'muted' | 'alt' | 'destructive' | 'none';
};

// Function to get shadow color based on variant
const getShadowColor = (shadowVariant: FlowStepTitleProps['shadow'] = 'default') => {
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

export const FlowStepTitle = (props: FlowStepTitleProps) => {
  const { children, className, variant: propVariant, shadow = 'default' } = props;
  const { variant: contextVariant } = React.useContext(FlowStepContext);
  const variant = propVariant || contextVariant;
  
  // Get shadow color based on the shadow prop
  const shadowColor = getShadowColor(shadow);
  
  // Apply text shadow if shadow is not 'none'
  const textShadowStyle = shadow === 'none' 
    ? {} 
    : { textShadow: `1px 1px 2px ${shadowColor}` };

  return (
    <div className={"mt-8 sm:mt-16 md:mt-24 w-full sm:w-[60%] md:w-[40%] py-2 sm:py-4 px-4 sm:px-12 md:px-24"}>
      <h1 
        className={cn("my-0 text-3xl sm:text-4xl md:text-5xl", titleVariants({ variant }), className)}
        style={textShadowStyle}
      >
        {children}
      </h1>
    </div>
  );
};

FlowStepTitle.displayName = "FlowStepTitle";
