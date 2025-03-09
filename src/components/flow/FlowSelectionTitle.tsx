import { cn } from "@/lib/utils";
import React from "react";
import { FlowStepContext, VariantType } from "./types";
import { bgAsTextVariants, titleForegroundVariants } from "./variants";
import { Button } from "../ui/button";

// Create a context to share the content visibility state
export const FlowContentContext = React.createContext<{
  isContentVisible: boolean;
  setContentVisible: (visible: boolean) => void;
}>({ 
  isContentVisible: false, 
  setContentVisible: () => {} 
});

// Create a global state object for content visibility
// This is a simple solution to avoid context issues
type Listener = () => void;

export const contentVisibilityState = {
  isVisible: false,
  listeners: new Set<Listener>(),
  
  setVisible(visible: boolean): void {
    this.isVisible = visible;
    this.notifyListeners();
  },
  
  addListener(listener: Listener): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  },
  
  notifyListeners(): void {
    this.listeners.forEach(listener => listener());
  }
};

// FlowSelectionTitle component
export type FlowSelectionTitleProps = {
  children: React.ReactNode;
  className?: string;
  variant?: VariantType;
  hasContent?: boolean;
};

// Helper function to get background color based on variant
const getBackgroundColor = (variant: VariantType, opacity: number) => {
  if (variant === 'none') return `hsla(var(--licorice), ${opacity})`;
  
  switch (variant) {
    case 'default': return `hsla(var(--default), ${opacity})`;
    case 'primary': return `hsla(var(--primary), ${opacity})`;
    case 'secondary': return `hsla(var(--secondary), ${opacity})`;
    case 'muted': return `hsla(var(--muted), ${opacity})`;
    case 'alt': return `hsla(var(--alt), ${opacity})`;
    case 'destructive': return `hsla(var(--destructive), ${opacity})`;
    default: return `hsla(var(--licorice), ${opacity})`;
  }
};



export const FlowSelectionTitle = (props: FlowSelectionTitleProps) => {
  const { children, className, variant: propVariant, hasContent = false } = props;
  const { variant: contextVariant } = React.useContext(FlowStepContext);
  const variant = propVariant || contextVariant;
  
  // We'll just use the hasContent prop that's passed in
  const shouldShowLearnMore = hasContent;

  // Use the global state object to handle visibility
  const handleShowContent = () => {
    console.log('Setting content visible to true');
    contentVisibilityState.setVisible(true);
  };

  return (
      <div
        data-flow-selection-title="true"
        className={cn(
          "w-full h-full p-2 flex flex-col sm:p-3 text-center font-semibold sm:text-base relative z-10",
          variant !== "none" && bgAsTextVariants({ variant }),
          className
        )}
        style={{
          backgroundColor: getBackgroundColor(variant, 0.05),
        }}
      >
      <h3
        className={cn(
          "w-full text-center font-semibold",
          titleForegroundVariants({ variant })
        )}
        style={{
          textShadow: `3px 3px 3px #000000`,
        }}
      >
        {children}
      </h3>
      <div className="flex-grow" />
      <div className="w-full flex gap-4 justify-center">
        {shouldShowLearnMore && (
          <Button 
            variant={variant !== 'none' ? `outline-${variant}` : 'outline'}
            onClick={handleShowContent}
          >
            Learn More
          </Button>
        )}
        <Button variant={variant}>CTA</Button>
      </div>
      </div>

  );
};

FlowSelectionTitle.displayName = "FlowSelectionTitle";
