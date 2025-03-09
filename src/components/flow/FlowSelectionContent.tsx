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
  
  return (
    <div className={cn(
      "p-2 text-sm sm:text-base flex items-center justify-center h-full", 
      variant !== 'none' && titleVariants({ variant }), // Only apply text color, not background
      className
    )}>
      {children}
    </div>
  );
};

FlowSelectionContent.displayName = "FlowSelectionContent";
