export const borders = {
  // Border widths
  width: {
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
  },

  // Border radius
  radius: {
    none: "0px",
    sm: "0.125rem", // 2px
    base: "0.25rem", // 4px
    md: "0.375rem", // 6px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    "2xl": "1rem", // 16px
    "3xl": "1.5rem", // 24px
    full: "9999px",
  },

  // Border styles
  style: {
    solid: "solid",
    dashed: "dashed",
    dotted: "dotted",
    double: "double",
    none: "none",
  },
} as const;

// Semantic border aliases
export const borderAliases = {
  // Component borders
  component: {
    input: `${borders.width[1]} ${borders.style.solid}`,
    button: `${borders.width[1]} ${borders.style.solid}`,
    card: `${borders.width[1]} ${borders.style.solid}`,
    divider: `${borders.width[1]} ${borders.style.solid}`,
  },

  // Interactive borders
  interactive: {
    default: `${borders.width[1]} ${borders.style.solid}`,
    hover: `${borders.width[2]} ${borders.style.solid}`,
    focus: `${borders.width[2]} ${borders.style.solid}`,
    active: `${borders.width[2]} ${borders.style.solid}`,
  },

  // Radius aliases
  radius: {
    button: borders.radius.md,
    input: borders.radius.md,
    card: borders.radius.lg,
    modal: borders.radius.xl,
    avatar: borders.radius.full,
  },
} as const;
