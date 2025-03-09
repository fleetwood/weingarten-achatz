import { cn } from "@/lib/utils";
import React from "react";
import { FlowStepContext, VariantType } from "./types";

// FlowSelection component
export type FlowSelectionProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  bg?: string;
  variant?: VariantType;
};

export const FlowSelection = (props: FlowSelectionProps) => {
  const { children, className, onClick, bg, variant: propVariant } = props;
  const { variant: contextVariant } = React.useContext(FlowStepContext);
  const variant = propVariant || contextVariant;
  
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
        "group flex flex-col h-28 sm:h-36 overflow-hidden cursor-pointer rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl relative",
        className
      )}
      style={bgStyle}
      onClick={onClick}
    >
      {/* Add overlay gradient for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--licorice))] to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
      
      {/* Apply variant background color as an overlay */}
      {variant !== 'none' && variant !== 'default' && (
        <div 
          className="absolute inset-0 mix-blend-overlay opacity-30 group-hover:opacity-40 transition-opacity"
          style={{ backgroundColor: `hsl(var(--${variant}))` }}
        ></div>
      )}
      
      {children}
    </div>
  );
};

FlowSelection.displayName = "FlowSelection";
