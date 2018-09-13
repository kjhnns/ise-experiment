// Documentation: https://github.com/jxnblk/styled-system

const breakpoints = ['40em', '52em', '64em'];

const colors = {
  text: '#024',
  white: '#FFFFFF',
  blue: '#3A70F6',
  green: '#1FA164',
  // nested objects work as well
  dark: {
    blue: '#058'
  },
  // arrays can be used for scales of colors
  gray: [
    '#333333',
    '#4F4F4F',
    '#828282',
    '#BDBDBD',
    '#E0E0E0',
    '#F2F2F2',
    '#F7F8FA',
    '#F5F5F5',
    '#CCCCCC',
    '#EDEDED'
  ]
};

// space is used for margin and padding scales
// it's recommended to use powers of two to ensure alignment
// when used in nested elements
// numbers are converted to px
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

// typographic scale
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96, 128];

// for any scale, either array or objects will work
const lineHeights = [1, 1.125, 1.25, 1.5];

const fontWeights = {
  normal: 400,
  semibold: 600
};

const letterSpacings = {
  normal: 'normal',
  caps: '0.25em',
  labels: '0.05em'
};

// border-radius
const radii = [0, 2, 4, 8, 16];

const borders = [0, '1px solid', '2px solid'];

const shadows = [
  `0 15px 35px rgba(50, 50, 93, 0.1)`,
  `0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08)`
];

const theme = {
  breakpoints,
  colors,
  space,
  fontSizes,
  lineHeights,
  fontWeights,
  letterSpacings,
  radii,
  borders,
  shadows
};

export default theme;
