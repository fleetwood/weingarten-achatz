import { cn } from "@/lib/utils";
import React from "react";
import { FlowStepContext, FlowSelectionProps } from "./types";
import { getVariantColor } from "./variants";

export const FlowSelection = (props: FlowSelectionProps) => {
  const { children, className, onClick, bg, variant: propVariant } = props;
  const { variant: contextVariant } = React.useContext(FlowStepContext);
  const variant = propVariant || contextVariant;

  const bgStyle = bg
    ? {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  return (
    <div
      data-flow-selection="true"
      className={cn(
        "group flex flex-col h-28 sm:h-36 overflow-hidden cursor-pointer rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl relative",
        className
      )}
      style={bgStyle}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--licorice))] to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>

      {variant !== "none" && variant !== "default" && (
        <div
          className="absolute inset-0 mix-blend-overlay opacity-30 group-hover:opacity-40 transition-opacity"
          style={{ backgroundColor: getVariantColor(variant) }}
        ></div>
      )}

      {children}
    </div>
  );
};

FlowSelection.displayName = "FlowSelection";
