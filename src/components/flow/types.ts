import React from "react";

// Variant type for all flow components
export type VariantType = 
  | "default"
  | "primary"
  | "secondary"
  | "muted"
  | "alt"
  | "destructive"
  | "none";

// FlowStep Context to share state between components
export type FlowStepContextType = {
  variant: VariantType;
};

// Create context with default value
export const FlowStepContext = React.createContext<FlowStepContextType>({ variant: "default" });
