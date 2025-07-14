# Design System

A comprehensive React design system built with modern tooling and best practices.

This design system provides a complete toolkit for building consistent, scalable user interfaces including design tokens, React components, and comprehensive styling solutions.

## 🚀 Features

- 🎨 **Design Tokens** - Comprehensive token system for colors, typography, spacing, and more
- 🎯 **React Components** - Production-ready components with TypeScript support
- 🎭 **SCSS Support** - Variables, mixins, and utilities for styling
- 📖 **Storybook** - Interactive component documentation
- 🔧 **TypeScript** - Full type safety across all packages
- 🏎 **Turborepo** - High-performance monorepo build system
- 📦 **Multiple Formats** - ESM, CJS, and TypeScript declarations
- 🧪 **Testing Ready** - Configured for Jest and React Testing Library

## 🛠 Tech Stack

- **Build System**: [Turborepo](https://turborepo.com) - High-performance build system for Monorepos
- **Framework**: [React](https://reactjs.org/) - JavaScript library for user interfaces
- **Bundler**: [Tsup](https://github.com/egoist/tsup) - TypeScript bundler powered by esbuild
- **Documentation**: [Storybook](https://storybook.js.org/) - UI component environment powered by Vite
- **Styling**: [SCSS](https://sass-lang.com/) - CSS extension language
- **Types**: [TypeScript](https://www.typescriptlang.org/) - Static type checking
- **Linting**: [ESLint](https://eslint.org/) - Code linting
- **Formatting**: [Prettier](https://prettier.io) - Code formatting
- **Versioning**: [Changesets](https://github.com/changesets/changesets) - Version management and changelogs
- **CI/CD**: [GitHub Actions](https://github.com/changesets/action) - Automated package publishing

## 📦 Packages

This monorepo includes the following packages:

### Core Packages

- **`@acme/tokens`** - Design tokens with JavaScript/TypeScript exports and SCSS variables
- **`@acme/ui`** - React components library with TypeScript support
- **`@acme/docs`** - Storybook documentation site

### Configuration Packages

- **`@acme/typescript-config`** - Shared TypeScript configurations
- **`@acme/eslint-config`** - ESLint presets and rules

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
# Run all packages in development mode
npm run dev

# Build all packages
npm run build

# Run linting
npm run lint

# Clean all build artifacts
npm run clean
```

### Storybook

The Storybook documentation site will be available at `http://localhost:6006` when running `npm run dev`.

## 🎨 Design Tokens

The `@acme/tokens` package provides a comprehensive design token system:

### JavaScript/TypeScript Usage

```typescript
import { tokens } from "@acme/tokens";

// Access color tokens
const primaryColor = tokens.colors.primary[500];
const textColor = tokens.colors.neutral[900];

// Typography tokens
const headingFont = tokens.typography.fontFamily.heading;
const bodySize = tokens.typography.fontSize.body;

// Spacing tokens
const spacing = tokens.spacing.md;
```

### SCSS Usage

```scss
@import "@acme/tokens/styles";

.my-component {
  color: $color-primary-500;
  font-family: $font-family-heading;
  font-size: $font-size-body;
  padding: $spacing-md;

  // Use mixins
  @include elevation-2;
  @include breakpoint-above(md) {
    padding: $spacing-lg;
  }
}
```

### Available Token Categories

- **Colors**: Primary, secondary, neutral, and semantic colors
- **Typography**: Font families, sizes, weights, and line heights
- **Spacing**: Consistent spacing scale
- **Breakpoints**: Responsive design breakpoints
- **Shadows**: Box-shadow tokens for elevation
- **Borders**: Border radius and width tokens
- **Z-Index**: Layering system
- **Animations**: Duration and easing tokens

## 🧩 Components

The `@acme/ui` package provides React components with full TypeScript support:

### Usage

```tsx
import { Button } from "@acme/ui/button";

function App() {
  return (
    <Button
      variant="primary"
      size="medium"
      onClick={() => console.log("Clicked!")}
    >
      Click me
    </Button>
  );
}
```

### Available Components

- **Button** - Primary, secondary, and ghost variants with multiple sizes
- _More components coming soon..._

## 📁 Project Structure

```
design-system/
├── apps/
│   └── docs/                    # Storybook documentation
├── packages/
│   ├── tokens/                  # Design tokens package
│   │   ├── src/
│   │   │   ├── colors.ts       # Color tokens
│   │   │   ├── typography.ts   # Typography tokens
│   │   │   ├── spacing.ts      # Spacing tokens
│   │   │   └── styles/         # SCSS variables and mixins
│   │   └── package.json
│   ├── ui/                      # React components
│   │   ├── src/
│   │   │   └── components/     # Component implementations
│   │   └── package.json
│   ├── typescript-config/       # TypeScript configurations
│   └── eslint-config/          # ESLint configurations
└── package.json
```

## 🔧 Development

### Adding a New Component

1. Create the component in `packages/ui/src/components/`
2. Add the component export to `packages/ui/package.json`
3. Create a Storybook story in `apps/docs/stories/`
4. Update the component's TypeScript types

### Adding New Tokens

1. Add tokens to the appropriate file in `packages/tokens/src/`
2. Update the SCSS variables in `packages/tokens/src/styles/variables.scss`
3. Run `npm run build` to generate the updated token files

### Component Development Guidelines

- Use TypeScript for all components
- Follow the MVP (Model-View-Presenter) pattern
- Use functional components with hooks
- Implement proper accessibility features
- Write descriptive prop types and component documentation
- Use early returns for better code readability
- Follow the established naming conventions

## 📋 Scripts

- `npm run dev` - Start development mode with Storybook
- `npm run build` - Build all packages
- `npm run lint` - Run ESLint on all packages
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests (when configured)
- `npm run changeset` - Generate a changeset for versioning
- `npm run clean` - Clean all build artifacts

## 🚢 Publishing

This project uses [Changesets](https://github.com/changesets/changesets) for version management and publishing.

### Creating a Changeset

```bash
npm run changeset
```

Follow the prompts to:

1. Select which packages have changed
2. Choose the type of change (patch, minor, major)
3. Write a summary of the changes

### Publishing

Publishing is automated through GitHub Actions when changes are pushed to the main branch.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Run `npm run lint` and `npm run build`
6. Create a changeset if needed
7. Submit a pull request

## 📝 License

MIT License - see the [LICENSE](LICENSE) file for details.
