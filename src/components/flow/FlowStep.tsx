// No utils needed for this component
import React from "react";
import { FlowStepContext, VariantType } from "./types";

// FlowStep main component
export type FlowStepProps = {
  bg?: string;
  children: React.ReactNode;
  variant?: VariantType;
};

export const FlowStep = (props: FlowStepProps) => {
  const { bg, children, variant = "default" } = props;

  // Apply background image if provided
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

FlowStep.displayName = "FlowStep";
