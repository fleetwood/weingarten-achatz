/**
 * Function provided by Tailwind to add custom utilities
 * @param utilities - Object containing the utility classes and their CSS properties
 */
type AddUtilitiesFunction = (utilities: any, variants?: string[]) => void;

/**
 * Function provided by Tailwind to access theme values
 * @param path - The dot-notation path to the theme value
 */
type ThemeFunction = (path: string) => any;

type GlowSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type GlowColor = 'primary' | 'accent' | 'success' | 'destructive';

const glowSizes: Record<GlowSize, number[]> = {
  'xs': [3],
  'sm': [3, 7],
  'md': [3, 7, 14],
  'lg': [3, 7, 14, 28],
  'xl': [3, 7, 14, 28, 42]
};

/**
 * Creates a drop shadow string for a specific color and blur values
 */
function createDropShadow(color: GlowColor, blurValues: number[]): string {
  return blurValues
    .map(blur => `drop-shadow(0 0 ${blur}px hsl(var(--${color})))`)
    .join(' ');
}

/**
 * Creates glow effect utilities that work for both text and SVG elements
 * 
 * @example
 * ```tsx
 * // Extra small primary glow
 * <h1 className="glow-primary-xs">Hello World</h1>
 * 
 * // Large accent glow
 * <PowerIcon className="glow-accent-lg" />
 * ```
 */
export function textShadowPlugin({ addUtilities }: { addUtilities: AddUtilitiesFunction; theme: ThemeFunction }) {
  // SVG glow utilities using filter: drop-shadow
  const colors: GlowColor[] = ['primary', 'accent', 'success', 'destructive'];
  const sizes = Object.entries(glowSizes);

  const glowUtilities = colors.reduce((colorAcc, color) => {
    const colorUtilities = sizes.reduce((sizeAcc, [size, blurs]) => ({
      ...sizeAcc,
      [`.glow-${color}-${size}`]: {
        filter: createDropShadow(color, blurs)
      }
    }), {});

    return { ...colorAcc, ...colorUtilities };
  }, {});

  // Text shadow utilities
  const textShadowUtilities = {
    '.text-shadow-sm': {
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)'
    },
    '.text-shadow': {
      textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
    },
    '.text-shadow-md': {
      textShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
    },
    '.text-shadow-lg': {
      textShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
    },
    '.text-shadow-xl': {
      textShadow: '0 16px 32px rgba(0, 0, 0, 0.2)'
    },
    '.text-shadow-none': {
      textShadow: 'none'
    },
    '.text-shadow-white': {
      textShadow: '0 0 2px #fff, 0 0 4px #fff'
    },
    '.text-shadow-black': {
      textShadow: '0 0 2px #000, 0 0 4px #000'
    },
  };

  addUtilities(glowUtilities);
  addUtilities(textShadowUtilities);
}
