import { cn } from "@/lib/utils";
import React from "react";
import {
  FlowStepContext,
  contentVisibilityState,
  FlowSelectionContentProps,
} from "./types";
import {
  titleVariants,
  containerVariants,
  getBackgroundColorWithOpacity,
} from "./variants";

export const FlowSelectionContent = (props: FlowSelectionContentProps) => {
  const { children, className, variant: propVariant } = props;
  const { variant: contextVariant } = React.useContext(FlowStepContext);
  const variant = propVariant || contextVariant;

  const [isVisible, setIsVisible] = React.useState(
    contentVisibilityState.isVisible
  );

  React.useEffect(() => {
    const unsubscribe = contentVisibilityState.addListener(() => {
      setIsVisible(contentVisibilityState.isVisible);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleClose = () => {
    contentVisibilityState.setVisible(false);
  };
  return (
    <div
      className={cn(
        "flow-selection-content absolute inset-0 p-4 text-sm sm:text-base flex flex-col z-20 transition-all duration-300 ease-in-out",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-full pointer-events-none",
        variant !== "none" && titleVariants({ variant }),
        variant !== "none" && containerVariants({ variant }),
        className
      )}
      style={{
        backgroundColor: getBackgroundColorWithOpacity(variant, 0.95),
        backdropFilter: "blur(4px)",
        display: isVisible ? "flex" : "none", // Ensure it's not visible when not active
      }}
    >
      <div className="flex justify-end mb-2">
        <button
          onClick={handleClose}
          className="rounded-full w-8 h-8 flex items-center justify-center hover:bg-foreground/10"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
};

FlowSelectionContent.displayName = "FlowSelectionContent";
