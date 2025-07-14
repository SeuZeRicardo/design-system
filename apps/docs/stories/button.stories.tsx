import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@acme/ui/button";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "A versatile button component with multiple variants, sizes, and states.",
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["primary", "secondary", "ghost"],
      description: "The visual style variant of the button",
    },
    size: {
      control: { type: "radio" },
      options: ["small", "medium", "large"],
      description: "The size of the button",
    },
    fullWidth: {
      control: { type: "boolean" },
      description: "Whether the button takes full width of its container",
    },
    loading: {
      control: { type: "boolean" },
      description: "Whether the button is in loading state",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the button is disabled",
    },
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
      description: "The HTML type attribute",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
    size: "medium",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost Button",
    variant: "ghost",
    size: "medium",
  },
};

export const Small: Story = {
  args: {
    children: "Small Button",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "large",
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width Button",
    fullWidth: true,
  },
};

export const Loading: Story = {
  args: {
    children: "Loading Button",
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="primary" size="small">
        Small
      </Button>
      <Button variant="primary" size="large">
        Large
      </Button>
      <Button variant="primary" loading>
        Loading
      </Button>
      <Button variant="primary" disabled>
        Disabled
      </Button>
    </div>
  ),
  name: "All Variants",
};
