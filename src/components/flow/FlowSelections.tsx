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
    <div className="mt-auto flex w-full">
      <div 
        className={cn(
          "flex flex-col sm:flex-row flex-wrap w-full", 
          className
        )}
        style={bgStyle}
      >
        {React.Children.map(children, (child) => (
          child ? (
            <div className="flex-1 min-w-[50%] sm:min-w-[25%]">
              {child}
            </div>
          ) : null
        ))}
      </div>
    </div>
  );
};

FlowSelections.displayName = "FlowSelections";
