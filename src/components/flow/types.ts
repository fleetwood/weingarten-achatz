import React from "react";

export type VariantType = 
  | "default"
  | "primary"
  | "secondary"
  | "muted"
  | "alt"
  | "destructive"
  | "none";

export type FlowStepContextType = {
  variant: VariantType;
};

export const FlowStepContext = React.createContext<FlowStepContextType>({ variant: "default" });

export type FlowContentContextType = {
  isContentVisible : boolean;
  setContentVisible: (visible: boolean) => void;
};

export const FlowContentContext = React.createContext<FlowContentContextType>({ 
  isContentVisible : false,
  setContentVisible: () => {}
});

export type Listener = () => void;

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

export type FlowStepTitleProps = {
  children  : React.ReactNode;
  variant  ?: VariantType;
  className?: string;
  shadow   ?: 'default' | 'secondary' | 'muted' | 'alt' | 'destructive' | 'none';
};

export type FlowSelectionsProps = {
  children  : React.ReactNode;
  className?: string;
};

export type FlowSelectionProps = {
  children  : React.ReactNode;
  className?: string;
  onClick  ?: () => void;
  bg       ?: string;
  variant  ?: VariantType;
};

export type FlowSelectionTitleProps = {
  children   : React.ReactNode;
  className ?: string;
  variant   ?: VariantType;
  hasContent?: boolean;
};

export type FlowSelectionContentProps = {
  children  : React.ReactNode;
  className?: string;
  variant  ?: VariantType;
};

export type FlowStepProps = {
  bg      ?: string;
  children : React.ReactNode;
  variant ?: VariantType;
};

  // FlowStepContent component props
export type FlowStepContentProps = {
  children  : React.ReactNode;
  variant  ?: VariantType;
  className?: string;
};
