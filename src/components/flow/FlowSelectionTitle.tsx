import { cn } from "@/lib/utils";
import React from "react";
import {
  FlowStepContext,
  FlowSelectionTitleProps,
  contentVisibilityState,
} from "./types";
import {
  bgAsTextVariants,
  titleForegroundVariants,
  getBackgroundColor,
} from "./variants";
import { Button } from "../ui/button";

export const FlowSelectionTitle = (props: FlowSelectionTitleProps) => {
  const {
    children,
    className,
    variant: propVariant,
    hasContent = false,
  } = props;
  const { variant: contextVariant } = React.useContext(FlowStepContext);
  const variant = propVariant || contextVariant;

  const shouldShowLearnMore = hasContent;
  const handleShowContent = () => {
    console.log("Setting content visible to true");
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
            variant={variant !== "none" ? `outline-${variant}` : "outline"}
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
