import { tokens } from "../tokens";

export const darkTheme = {
  colors: {
    // Background colors
    background: {
      primary: tokens.colors.neutral[900],
      secondary: tokens.colors.neutral[800],
      tertiary: tokens.colors.neutral[700],
      inverse: tokens.colors.white,
    },

    // Text colors
    text: {
      primary: tokens.colors.neutral[50],
      secondary: tokens.colors.neutral[300],
      tertiary: tokens.colors.neutral[400],
      inverse: tokens.colors.neutral[900],
      disabled: tokens.colors.neutral[600],
    },

    // Border colors
    border: {
      primary: tokens.colors.neutral[700],
      secondary: tokens.colors.neutral[600],
      tertiary: tokens.colors.neutral[500],
      focus: tokens.colors.primary[400],
    },

    // Interactive colors
    interactive: {
      primary: tokens.colors.primary[500],
      primaryHover: tokens.colors.primary[400],
      primaryActive: tokens.colors.primary[300],
      secondary: tokens.colors.secondary[400],
      secondaryHover: tokens.colors.secondary[300],
      secondaryActive: tokens.colors.secondary[200],
    },

    // State colors
    success: tokens.colors.success[500],
    warning: tokens.colors.warning[500],
    error: tokens.colors.error[500],
    info: tokens.colors.info[500],
  },

  // Inherit all other tokens
  typography: tokens.typography,
  spacing: tokens.spacing,
  breakpoints: tokens.breakpoints,
  shadows: tokens.shadows,
  borders: tokens.borders,
  zIndex: tokens.zIndex,
  animations: tokens.animations,
} as const;

export type DarkTheme = typeof darkTheme;
