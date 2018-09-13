import { themeGet, util } from 'styled-system';

// Re-export to have all utilities in one place
export { themeGet };

// Utility function to get pixel values from a unitless scale in our theme.js
export const themePx = (...args) => props => util.px(themeGet(...args)(props));
