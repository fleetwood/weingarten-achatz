import { cn } from "@/lib/utils";
import React from "react";
import { FlowStepContext } from "./types";
import { getVariantColorWithOpacity, getVariantTextColorClass, getVariantGradientClass } from "./variants";

// FlowStepContent component props moved to types.ts
import { FlowStepContentProps } from "./types";

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
