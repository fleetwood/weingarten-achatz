import { cn } from "@/lib/utils";
import React from "react";

// FlowSelections component
export type FlowSelectionsProps = {
  children: React.ReactNode;
  className?: string;
};

export const FlowSelections = (props: FlowSelectionsProps) => {
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

FlowSelections.displayName = "FlowSelections";
