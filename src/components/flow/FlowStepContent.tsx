import { cn } from "@/lib/utils";
import React from "react";
import { FlowStepContext, VariantType } from "./types";
import { containerVariants } from "./variants";

// FlowStepContent component
export type FlowStepContentProps = {
  children: React.ReactNode;
  variant?: VariantType;
  className?: string;
};

export const FlowStepContent = (props: FlowStepContentProps) => {
  const { children, className, variant: propVariant } = props;
  const { variant: contextVariant } = React.useContext(FlowStepContext);
  const variant = propVariant || contextVariant;

  return (
    <div className="flex justify-center items-center mt-2 sm:mt-4 mb-4">
      <div
        className={cn(
          "rounded-lg p-2 sm:p-4 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] max-h-[40vh] overflow-y-auto",
          containerVariants({ variant }),
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

FlowStepContent.displayName = "FlowStepContent";
