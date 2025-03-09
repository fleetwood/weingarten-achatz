import { cn } from "@/lib/utils";
import React from "react";
import { VariantType } from "./types";

// FlowSelection component
export type FlowSelectionProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  bg?: string;
  variant?: VariantType;
};

export const FlowSelection = (props: FlowSelectionProps) => {
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

FlowSelection.displayName = "FlowSelection";
