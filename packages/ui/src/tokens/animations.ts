export const animations = {
  // Durations
  duration: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
    slower: "750ms",
    slowest: "1000ms",
  },

  // Timing functions
  easing: {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",

    // Custom easing functions
    smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
    spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },

  // Common transitions
  transition: {
    default: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
    fast: "all 150ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "all 500ms cubic-bezier(0.4, 0, 0.2, 1)",

    // Specific property transitions
    colors:
      "color 150ms cubic-bezier(0.4, 0, 0.2, 1), background-color 150ms cubic-bezier(0.4, 0, 0.2, 1), border-color 150ms cubic-bezier(0.4, 0, 0.2, 1)",
    opacity: "opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)",
    shadow: "box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1)",
    transform: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const;

// Semantic animation aliases
export const animationAliases = {
  // Component animations
  component: {
    button: animations.transition.colors,
    input: animations.transition.colors,
    modal: animations.transition.opacity,
    tooltip: animations.transition.fast,
    dropdown: animations.transition.fast,
  },

  // Interactive animations
  interactive: {
    hover: animations.transition.fast,
    focus: animations.transition.fast,
    active: animations.transition.fast,
  },
} as const;
