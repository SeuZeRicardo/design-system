export const breakpoints = {
  xs: "0px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

// Breakpoint ranges for easier usage
export const breakpointRanges = {
  mobile: `(max-width: ${breakpoints.sm})`,
  tablet: `(min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.lg})`,
  desktop: `(min-width: ${breakpoints.lg})`,

  // Min-width media queries
  fromSm: `(min-width: ${breakpoints.sm})`,
  fromMd: `(min-width: ${breakpoints.md})`,
  fromLg: `(min-width: ${breakpoints.lg})`,
  fromXl: `(min-width: ${breakpoints.xl})`,
  from2xl: `(min-width: ${breakpoints["2xl"]})`,

  // Max-width media queries
  toSm: `(max-width: ${breakpoints.sm})`,
  toMd: `(max-width: ${breakpoints.md})`,
  toLg: `(max-width: ${breakpoints.lg})`,
  toXl: `(max-width: ${breakpoints.xl})`,
  to2xl: `(max-width: ${breakpoints["2xl"]})`,
} as const;
