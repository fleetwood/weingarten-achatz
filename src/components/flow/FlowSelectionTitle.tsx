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
      "w-full p-1 sm:p-2 text-center font-semibold text-sm sm:text-base", 
      variant !== 'none' && bgAsTextVariants({ variant }),
      variant !== 'none' && containerVariants({ variant }),
      className
    )}>
      {children}
    </div>
  );
};

FlowSelectionTitle.displayName = "FlowSelectionTitle";
