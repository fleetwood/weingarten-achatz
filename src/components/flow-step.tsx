import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";
import { FlowSelectionContent } from "./flow/FlowSelectionContent";
import { FlowStepTitle } from "./flow/FlowStepTitle";
import { FlowStepContext, VariantType, FlowStepContentProps, FlowSelectionsProps, FlowSelectionProps, FlowStepProps } from "./flow/types";

// Helper functions moved to FlowSelectionContent.tsx

// VariantType imported from types.ts

// Variant for the container background and text
const containerVariants = cva("", {
  variants: {
    variant: {
      default: "bg-background text-foreground",
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      muted: "bg-muted text-muted-foreground",
      alt: "bg-alt text-alt-foreground",
      destructive: "bg-destructive text-destructive-foreground",
      none: "bg-transparent"
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

// titleVariants moved to variants.ts

// Variant for background colors as text colors
const bgAsTextVariants = cva("", {
  variants: {
    variant: {
      default: "text-background",
      primary: "text-primary",
      secondary: "text-secondary",
      muted: "text-muted",
      alt: "text-alt",
      destructive: "text-destructive",
      none: ""
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

// FlowStepContext imported from types.ts

// FlowStepProps imported from types.ts

const FlowStep = (props: FlowStepProps) => {
  const {
    bg,
    children,
    variant = "default",
  } = props;

  const bgStyle = bg
    ? {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  return (
    <FlowStepContext.Provider value={{ variant }}>
      <div className={"relative flex-1 flex flex-col"} style={bgStyle}>
        <div className="relative h-full w-full flex flex-col">
          {children}
        </div>
      </div>
    </FlowStepContext.Provider>
  );
};

// FlowStepTitleProps imported from types.ts

// getShadowColor function moved to FlowStepTitle.tsx

// FlowStepTitle component moved to its own file

// FlowStepContentProps imported from types.ts

const FlowStepContent = (props: FlowStepContentProps) => {
  const { children, variant: propVariant, className } = props;
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

// FlowSelectionsProps imported from types.ts

const FlowSelections = (props: FlowSelectionsProps) => {
  const { children, className } = props;
  
  const bgStyle = {
    backgroundColor: 'hsla(var(--background), 0.2)'
  };
  
  return (
    <div className="mt-auto flex">
      <div 
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 w-full", 
          className
        )}
        style={bgStyle}
      >
        {children}
      </div>
    </div>
  );
};

// FlowSelectionProps imported from types.ts

const FlowSelection = (props: FlowSelectionProps) => {
  const { children, className, onClick, bg } = props;
  // We're not using variant directly in this component anymore, but we keep it in the props
  // for type consistency with other components
  
  // Apply background image if provided
  const bgStyle = bg
    ? {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};
  
  return (
    <div 
      className={cn(
        "flex flex-col h-24 sm:h-32 overflow-hidden cursor-pointer transition-all duration-200 ease-in-out hover:opacity-90",
        className
      )}
      style={bgStyle}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

// FlowSelectionTitle component
export type FlowSelectionTitleProps = {
  children: React.ReactNode;
  className?: string;
  variant?: VariantType;
};

const FlowSelectionTitle = (props: FlowSelectionTitleProps) => {
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

// FlowSelectionContent is now imported from its own file

// Export components
FlowStep.displayName = "FlowStep";
FlowStepTitle.displayName = "FlowStepTitle";
FlowStepContent.displayName = "FlowStepContent";
FlowSelections.displayName = "FlowSelections";
FlowSelection.displayName = "FlowSelection";
FlowSelectionTitle.displayName = "FlowSelectionTitle";
FlowSelectionContent.displayName = "FlowSelectionContent";

export { 
  FlowStepTitle, 
  FlowStepContent,
  FlowSelections,
  FlowSelection,
  FlowSelectionTitle,
  FlowSelectionContent 
};
export default FlowStep;
