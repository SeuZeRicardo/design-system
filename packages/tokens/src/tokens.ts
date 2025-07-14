import { colors, semanticColors } from "./colors";
import { typography, textStyles } from "./typography";
import { spacing, spacingAliases } from "./spacing";
import { breakpoints, breakpointRanges } from "./breakpoints";
import { shadows, shadowAliases } from "./shadows";
import { borders, borderAliases } from "./borders";
import { zIndex } from "./z-index";
import { animations, animationAliases } from "./animations";

// Main tokens object
export const tokens = {
  colors,
  semanticColors,
  typography,
  textStyles,
  spacing,
  spacingAliases,
  breakpoints,
  breakpointRanges,
  shadows,
  shadowAliases,
  borders,
  borderAliases,
  zIndex,
  animations,
  animationAliases,
} as const;

// Export type for design tokens
export type DesignTokens = typeof tokens;
