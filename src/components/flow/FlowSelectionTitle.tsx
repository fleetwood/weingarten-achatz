import { cn } from "@/lib/utils";
import React from "react";
import { FlowStepContext, VariantType } from "./types";
import { bgAsTextVariants, containerVariants } from "./variants";

// FlowSelectionTitle component
export type FlowSelectionTitleProps = {
  children: React.ReactNode;
  className?: string;
  variant?: VariantType;
};

export const FlowSelectionTitle = (props: FlowSelectionTitleProps) => {
  const { children, className, variant: propVariant } = props;
  const { variant: contextVariant } = React.useContext(FlowStepContext);
  const variant = propVariant || contextVariant;
  
  return (
    <div className={cn(
      "w-full p-2 sm:p-3 text-center font-semibold sm:text-base backdrop-blur-sm relative z-10", 
      variant !== 'none' && bgAsTextVariants({ variant }),
      variant !== 'none' && containerVariants({ variant: 'none' }),
      className
    )}
    style={{
      textShadow: `2px 2px 2px hsla(var(--licorice), 0.8)`,
      backgroundColor: 'hsla(var(--licorice), 0.3)'
    }}
    >
      {children}
    </div>
  );
};

FlowSelectionTitle.displayName = "FlowSelectionTitle";
