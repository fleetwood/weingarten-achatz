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

// FlowStepTitle component props
export type FlowStepTitleProps = {
  children: React.ReactNode;
  variant?: VariantType;
  className?: string;
  shadow?: 'default' | 'secondary' | 'muted' | 'alt' | 'destructive' | 'none';
};

// FlowStepContent component props
export type FlowStepContentProps = {
  children: React.ReactNode;
  variant?: VariantType;
  className?: string;
};

// FlowSelections component props
export type FlowSelectionsProps = {
  children: React.ReactNode;
  className?: string;
};

// FlowSelection component props
export type FlowSelectionProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  bg?: string;
  variant?: VariantType;
};

// FlowStep main component props
export type FlowStepProps = {
  bg?: string;
  children: React.ReactNode;
  variant?: VariantType;
};
