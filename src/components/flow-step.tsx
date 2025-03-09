import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import React from "react";

type VariantType = 
  | "default"
  | "primary"
  | "secondary"
  | "muted"
  | "alt"
  | "destructive"
  | "none";

// Variant for the container background and text
const containerVariants = cva("", {
  variants: {
    variant: {
      default: "bg-background text-foreground",
      primary: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      muted: "bg-muted text-muted-foreground",
      alt: "bg-alt text-alt-foreground",
      destructive: "bg-destructive text-destructive-foreground",
      none: "bg-transparent"
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

// Variant for title text only
const titleVariants = cva("", {
  variants: {
    variant: {
      default: "text-foreground",
      primary: "text-primary-foreground",
      secondary: "text-secondary-foreground",
      muted: "text-muted-foreground",
      alt: "text-alt-foreground",
      destructive: "text-destructive-foreground",
      none: ""
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

// Variant for background colors as text colors
const bgAsTextVariants = cva("", {
  variants: {
    variant: {
      default: "text-background",
      primary: "text-primary",
      secondary: "text-secondary",
      muted: "text-muted",
      alt: "text-alt",
      destructive: "text-destructive",
      none: ""
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

// FlowStep Context to share state between components
type FlowStepContextType = {
  variant: VariantType;
};

const FlowStepContext = React.createContext<FlowStepContextType>({ variant: "default" });

// FlowStep main component
export type FlowStepProps = {
  bg?: string;
  children: React.ReactNode;
  variant?: VariantType;
};

const FlowStep = (props: FlowStepProps) => {
  const {
    bg,
    children,
    variant = "default",
  } = props;

  const bgStyle = bg
    ? {
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  return (
    <FlowStepContext.Provider value={{ variant }}>
      <div className={"relative flex-1 flex flex-col"} style={bgStyle}>
        <div className="relative h-full w-full flex flex-col">
          {children}
        </div>
      </div>
    </FlowStepContext.Provider>
  );
};

// FlowStepTitle component
export type FlowStepTitleProps = {
  children: React.ReactNode;
  variant?: VariantType;
  className?: string;
  shadow?: 'default' | 'secondary' | 'muted' | 'alt' | 'destructive' | 'none';
};

// Function to get shadow color based on variant
const getShadowColor = (shadowVariant: FlowStepTitleProps['shadow'] = 'default') => {
  switch (shadowVariant) {
    case 'default':
      return '#000'; // Black shadow
    case 'secondary':
      return 'hsl(var(--secondary))'; // Secondary color shadow
    case 'muted':
      return 'hsl(var(--muted))'; // Muted color shadow
    case 'alt':
      return 'hsl(var(--alt))'; // Alt color shadow
    case 'destructive':
      return 'hsl(var(--destructive))'; // Destructive color shadow
    case 'none':
      return 'transparent'; // No shadow
    default:
      return '#000'; // Default to black
  }
};

const FlowStepTitle = (props: FlowStepTitleProps) => {
  const { children, variant: propVariant, className, shadow = 'default' } = props;
  const { variant: contextVariant } = React.useContext(FlowStepContext);
  const variant = propVariant || contextVariant;
  
  // Get the shadow color based on the shadow prop
  const shadowColor = getShadowColor(shadow);
  
  // Create text shadow style with the appropriate color
  const textShadowStyle = shadow === 'none' 
    ? {} 
    : { textShadow: `1px 1px 2px ${shadowColor}` };

  return (
    <div className={"mt-8 sm:mt-16 md:mt-24 w-full sm:w-[60%] md:w-[40%] py-2 sm:py-4 px-4 sm:px-12 md:px-24"}>
      <h1 
        className={cn("my-0 text-3xl sm:text-4xl md:text-5xl", titleVariants({ variant }), className)}
        style={textShadowStyle}
      >
        {children}
      </h1>
    </div>
  );
};

// FlowStepContent component
export type FlowStepContentProps = {
  children: React.ReactNode;
  variant?: VariantType;
  className?: string;
};

const FlowStepContent = (props: FlowStepContentProps) => {
  const { children, variant: propVariant, className } = props;
  const { variant: contextVariant } = React.useContext(FlowStepContext);
  const variant = propVariant || contextVariant;

  return (
    <div className="flex justify-center items-center mt-2 sm:mt-4 mb-4">
      <div
        className={cn(
          "rounded-lg p-2 sm:p-4 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] max-h-[40vh] overflow-y-auto",
          containerVariants({ variant }),
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

// FlowSelections component
export type FlowSelectionsProps = {
  children: React.ReactNode;
  className?: string;
};

const FlowSelections = (props: FlowSelectionsProps) => {
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

// FlowSelection component
export type FlowSelectionProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  bg?: string;
  variant?: VariantType;
};

const FlowSelection = (props: FlowSelectionProps) => {
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

// FlowSelectionTitle component
export type FlowSelectionTitleProps = {
  children: React.ReactNode;
  className?: string;
  variant?: VariantType;
};

const FlowSelectionTitle = (props: FlowSelectionTitleProps) => {
  const { children, className, variant: propVariant } = props;
  const { variant: contextVariant } = React.useContext(FlowStepContext);
  const variant = propVariant || contextVariant;
  
  return (
    <div className={cn(
      "w-full p-1 sm:p-2 text-center font-semibold text-sm sm:text-base", 
      variant !== 'none' && bgAsTextVariants({ variant }),
      variant !== 'none' && containerVariants({ variant }),
      className
    )}>
      {children}
    </div>
  );
};

// FlowSelectionContent component
export type FlowSelectionContentProps = {
  children: React.ReactNode;
  className?: string;
  variant?: VariantType;
};

const FlowSelectionContent = (props: FlowSelectionContentProps) => {
  const { children, className, variant: propVariant } = props;
  const { variant: contextVariant } = React.useContext(FlowStepContext);
  const variant = propVariant || contextVariant;
  
  return (
    <div className={cn(
      "p-2 text-sm sm:text-base flex items-center justify-center h-full", 
      variant !== 'none' && titleVariants({ variant }), // Only apply text color, not background
      className
    )}>
      {children}
    </div>
  );
};

// Export components
FlowStep.displayName = "FlowStep";
FlowStepTitle.displayName = "FlowStepTitle";
FlowStepContent.displayName = "FlowStepContent";
FlowSelections.displayName = "FlowSelections";
FlowSelection.displayName = "FlowSelection";
FlowSelectionTitle.displayName = "FlowSelectionTitle";
FlowSelectionContent.displayName = "FlowSelectionContent";

export { 
  FlowStepTitle, 
  FlowStepContent,
  FlowSelections,
  FlowSelection,
  FlowSelectionTitle,
  FlowSelectionContent 
};
export default FlowStep;
