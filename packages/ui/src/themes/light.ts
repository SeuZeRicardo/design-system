import { tokens } from "../tokens";

export const lightTheme = {
  colors: {
    // Background colors
    background: {
      primary: tokens.colors.white,
      secondary: tokens.colors.neutral[50],
      tertiary: tokens.colors.neutral[100],
      inverse: tokens.colors.neutral[900],
    },

    // Text colors
    text: {
      primary: tokens.colors.neutral[900],
      secondary: tokens.colors.neutral[700],
      tertiary: tokens.colors.neutral[500],
      inverse: tokens.colors.white,
      disabled: tokens.colors.neutral[400],
    },

    // Border colors
    border: {
      primary: tokens.colors.neutral[200],
      secondary: tokens.colors.neutral[300],
      tertiary: tokens.colors.neutral[400],
      focus: tokens.colors.primary[500],
    },

    // Interactive colors
    interactive: {
      primary: tokens.colors.primary[600],
      primaryHover: tokens.colors.primary[700],
      primaryActive: tokens.colors.primary[800],
      secondary: tokens.colors.secondary[600],
      secondaryHover: tokens.colors.secondary[700],
      secondaryActive: tokens.colors.secondary[800],
    },

    // State colors
    success: tokens.colors.success[600],
    warning: tokens.colors.warning[600],
    error: tokens.colors.error[600],
    info: tokens.colors.info[600],
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

export type LightTheme = typeof lightTheme;
