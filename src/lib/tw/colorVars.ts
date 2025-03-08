/* eslint-disable */
type ThemeFunction = (path: string) => any;
type AddBaseFunction = (styles: any) => void;

export function colorVarsPlugin({ addBase, theme }: { addBase: AddBaseFunction; theme: ThemeFunction }) {
  function extractColorVars(colorObj: Object, colorGroup = ''): Object {
    return Object.keys(colorObj).reduce((vars, colorKey) => {
      const value = colorObj[colorKey as keyof typeof colorObj];

      const newVars =
        typeof value === 'string'
          ? { [`--${colorGroup}${colorKey}`]: value }
          : extractColorVars(value as Object, `${colorGroup}${colorKey}-`);

      return { ...vars, ...newVars };
    }, {});
  }

  addBase({
    ':root': extractColorVars(theme('colors')),
  });
}
