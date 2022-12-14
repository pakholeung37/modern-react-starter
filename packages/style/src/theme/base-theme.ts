import { colors } from './colors'
import { space } from './space'

export const baseTheme = {
  color: {
    ...colors,
    primary: null,
    primary0: null,
    primary1: null,
    primary2: null,
    primary3: null,
    primary4: null,
    primary5: null,
    primary6: null,
    primary7: null,
    primary8: null,
    primary9: null,
    border: null,
    fg_default: null,
    fg_default0: null,
    fg_default1: null,
    fg_default2: null,
    fg_default3: null,
    bg_default: null,
    bg_default0: null,
    bg_default1: null,
    bg_default2: null,
    bg_default3: null,
    success: null,
    success0: null,
    success1: null,
    success2: null,
    success3: null,
    info: null,
    info0: null,
    info1: null,
    info2: null,
    info3: null,
    warning: null,
    warning0: null,
    warning1: null,
    warning2: null,
    warning3: null,
    error: null,
    error0: null,
    error1: null,
    error2: null,
    error3: null,
    critical: null,
    critical0: null,
    critical1: null,
    critical2: null,
    critical3: null,
  },
  space,
  borderRadius: {
    xs: '0.125rem',
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    rounded: '9999px',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeights: {
    hairline: '100',
    thin: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  transition: {
    property: {
      common: 'background-color,border-color,color,fill,stroke,opacity,box-shadow,transform',
      colors: 'background-color,border-color,color,fill,stroke',
      dimentions: 'width,height',
      position: 'left,right,top,bottom',
    },
    duration: {
      ultra_fast: '50ms',
      fast: '100ms',
      faster: '150ms',
      normal: '200ms',
      slow: '300ms',
      slower: '400ms',
      ultra_slow: '500ms',
    },
    easing_ease_in: 'cubic-bezier(0.4, 0, 1, 1)',
    easing_ease_in_out: 'cubic-bezier(0, 0, 0.2, 1)',
    easing_ease_out: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  shadow: {
    xs: `0 0 0 1px rgba(0, 0, 0, 0.05)`,
    sm: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`,
    base: `0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06)`,
    md: `0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)`,
    lg: `0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05)`,
    xl: `0 20px 25px -5px rgba(0, 0, 0, 0.1),0 10px 10px -5px rgba(0, 0, 0, 0.04)`,
    ['2xl']: ` 0 25px 50px -12px rgba(0, 0, 0, 0.25)`,
    outline: `0 0 0 3px rgba(66, 153, 225, 0.6)`,
    inner: `inset 0 2px 4px 0 rgba(0,0,0,0.06)`,
    none: `none`,
    ['dark-lg']: `rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,rgba(0, 0, 0, 0.2) 0px 5px 10px,rgba(0, 0, 0, 0.4) 0px 15px 40px`,
  },
}
