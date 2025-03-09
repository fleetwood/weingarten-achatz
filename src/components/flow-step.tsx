import { cn } from "@/lib/utils";
import React from "react";
import { FlowSelectionContent } from "./flow/FlowSelectionContent";
import { FlowStepTitle } from "./flow/FlowStepTitle";
import {
  FlowStepContext,
  VariantType,
  FlowStepContentProps,
  FlowSelectionsProps,
  FlowSelectionProps,
  FlowStepProps,
} from "./flow/types";
import { containerVariants, bgAsTextVariants } from "./flow/variants";

const FlowStep = (props: FlowStepProps) => {
  const { bg, children, variant = "default" } = props;

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
        <div className="relative h-full w-full flex flex-col">{children}</div>
      </div>
    </FlowStepContext.Provider>
  );
};

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

const FlowSelections = (props: FlowSelectionsProps) => {
  const { children, className } = props;

  const bgStyle = {
    backgroundColor: "hsla(var(--background), 0.2)",
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
    <div
      className={cn(
        "w-full p-1 sm:p-2 text-center font-semibold text-sm sm:text-base",
        variant !== "none" && bgAsTextVariants({ variant }),
        variant !== "none" && containerVariants({ variant }),
        className
      )}
    >
      {children}
    </div>
  );
};

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
  FlowSelectionContent,
};
export default FlowStep;
