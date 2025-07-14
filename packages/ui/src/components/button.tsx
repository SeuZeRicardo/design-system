import { forwardRef } from "react";
import { tokens, shadowAliases } from "../tokens";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "medium",
      fullWidth = false,
      loading = false,
      className = "",
      disabled,
      style,
      ...other
    },
    ref
  ) => {
    const getVariantStyles = (): React.CSSProperties => {
      const baseStyles = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: tokens.borders.radius.md,
        cursor: "pointer",
        textDecoration: "none",
        fontSize: tokens.typography.fontSize.base,
        fontWeight: tokens.typography.fontWeight.medium,
        lineHeight: 1,
        fontFamily: tokens.typography.fontFamily.sans.join(", "),
        transition: tokens.animations.transition.colors,
        border: `${tokens.borders.width[1]} solid transparent`,
        ":focus-visible": {
          outline: "2px solid transparent",
          outlineOffset: "2px",
          boxShadow: shadowAliases.component.focus,
        },
        ":disabled": {
          opacity: "0.6",
          cursor: "not-allowed",
        },
      };

      const variantStyles = {
        primary: {
          backgroundColor: tokens.semanticColors.interactive.primary,
          color: tokens.semanticColors.text.inverse,
          borderColor: tokens.semanticColors.interactive.primary,
          ":hover": {
            backgroundColor: tokens.semanticColors.interactive.primaryHover,
            borderColor: tokens.semanticColors.interactive.primaryHover,
          },
          ":active": {
            backgroundColor: tokens.semanticColors.interactive.primaryActive,
            borderColor: tokens.semanticColors.interactive.primaryActive,
          },
        },
        secondary: {
          backgroundColor: tokens.semanticColors.background.primary,
          color: tokens.semanticColors.text.primary,
          borderColor: tokens.semanticColors.border.primary,
          ":hover": {
            backgroundColor: tokens.semanticColors.background.secondary,
            borderColor: tokens.semanticColors.border.secondary,
          },
          ":active": {
            backgroundColor: tokens.semanticColors.background.tertiary,
            borderColor: tokens.semanticColors.border.tertiary,
          },
        },
        ghost: {
          backgroundColor: "transparent",
          color: tokens.semanticColors.text.primary,
          borderColor: "transparent",
          ":hover": {
            backgroundColor: tokens.semanticColors.background.secondary,
          },
          ":active": {
            backgroundColor: tokens.semanticColors.background.tertiary,
          },
        },
      };

      return { ...baseStyles, ...variantStyles[variant] };
    };

    const getSizeStyles = (): React.CSSProperties => {
      const sizeStyles = {
        small: {
          padding: `${tokens.spacing[1]} ${tokens.spacing[3]}`,
          fontSize: tokens.typography.fontSize.sm,
        },
        medium: {
          padding: `${tokens.spacing[2]} ${tokens.spacing[4]}`,
          fontSize: tokens.typography.fontSize.base,
        },
        large: {
          padding: `${tokens.spacing[3]} ${tokens.spacing[6]}`,
          fontSize: tokens.typography.fontSize.lg,
        },
      };

      return sizeStyles[size];
    };

    const getAdditionalStyles = (): React.CSSProperties => {
      const additionalStyles: React.CSSProperties = {};

      if (fullWidth) {
        additionalStyles.width = "100%";
      }

      if (loading) {
        additionalStyles.position = "relative";
        additionalStyles.color = "transparent";
      }

      return additionalStyles;
    };

    const buttonStyle = {
      ...getVariantStyles(),
      ...getSizeStyles(),
      ...getAdditionalStyles(),
      ...style,
    };

    return (
      <button
        {...other}
        aria-disabled={disabled || loading}
        className={className}
        disabled={disabled || loading}
        ref={ref}
        style={buttonStyle}
        type="button"
      >
        {loading ? (
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "1rem",
              height: "1rem",
              border: "2px solid transparent",
              borderTop: "2px solid currentColor",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
