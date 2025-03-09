import { cn } from "@/lib/utils";
import React from "react";
import { FlowStepContext, VariantType } from "./types";
import { titleVariants, containerVariants } from "./variants";
import { contentVisibilityState } from "./FlowSelectionTitle";

// FlowSelectionContent component
export type FlowSelectionContentProps = {
  children: React.ReactNode;
  className?: string;
  variant?: VariantType;
};

// Helper function to get background color with opacity
const getBackgroundColorWithOpacity = (variant: VariantType, opacity: number) => {
  if (variant === 'none') return `hsla(var(--background), ${opacity})`;
  
  switch (variant) {
    case 'default': return `hsla(var(--default), ${opacity})`;
    case 'primary': return `hsla(var(--primary), ${opacity})`;
    case 'secondary': return `hsla(var(--secondary), ${opacity})`;
    case 'muted': return `hsla(var(--muted), ${opacity})`;
    case 'alt': return `hsla(var(--alt), ${opacity})`;
    case 'destructive': return `hsla(var(--destructive), ${opacity})`;
    default: return `hsla(var(--background), ${opacity})`;
  }
};

export const FlowSelectionContent = (props: FlowSelectionContentProps) => {
  const { children, className, variant: propVariant } = props;
  const { variant: contextVariant } = React.useContext(FlowStepContext);
  const variant = propVariant || contextVariant;
  
  // Use state to track visibility from the global state
  const [isVisible, setIsVisible] = React.useState(contentVisibilityState.isVisible);
  
  // Subscribe to changes in the global state
  React.useEffect(() => {
    // Update our local state when the global state changes
    const unsubscribe = contentVisibilityState.addListener(() => {
      setIsVisible(contentVisibilityState.isVisible);
    });
    
    // Clean up subscription on unmount
    return () => {
      unsubscribe();
    };
  }, []);
  
  // Handle close button click
  const handleClose = () => {
    contentVisibilityState.setVisible(false);
  };
  
  // Always render with the flow-selection-content class for detection
  return (
    <div 
      className={cn(
        "flow-selection-content absolute inset-0 p-4 text-sm sm:text-base flex flex-col z-20 transition-all duration-300 ease-in-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none",
        variant !== 'none' && titleVariants({ variant }),
        variant !== 'none' && containerVariants({ variant }),
        className
      )}
      style={{
        backgroundColor: getBackgroundColorWithOpacity(variant, 0.95),
        backdropFilter: 'blur(4px)',
        display: isVisible ? 'flex' : 'none' // Ensure it's not visible when not active
      }}
    >
      <div className="flex justify-end mb-2">
        <button 
          onClick={handleClose}
          className="rounded-full w-8 h-8 flex items-center justify-center hover:bg-foreground/10"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
};

FlowSelectionContent.displayName = "FlowSelectionContent";
