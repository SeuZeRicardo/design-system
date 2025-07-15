import type { Meta, StoryObj } from "@storybook/react";
import { useFiniteStateMachine } from "@acme/hooks";
import { Button } from "@acme/ui";

// Toggle Example Component
function ToggleExample(): JSX.Element {
  const [currentState, { goToState }] = useFiniteStateMachine(["off", "on"], {
    initialState: "off",
  });

  const handleToggle = (): void => {
    goToState(currentState === "off" ? "on" : "off");
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        margin: "10px 0",
      }}
    >
      <h3>Toggle Example</h3>
      <p>
        Current state: <strong>{currentState}</strong>
      </p>
      <Button
        onClick={handleToggle}
        variant={currentState === "on" ? "primary" : "secondary"}
      >
        {currentState === "on" ? "Turn Off" : "Turn On"}
      </Button>
    </div>
  );
}

// Loading Example Component
function LoadingExample(): JSX.Element {
  const [currentState, { goToState }] = useFiniteStateMachine(
    ["idle", "loading", "success", "error"],
    {
      initialState: "idle",
    }
  );

  const handleFetch = (): void => {
    goToState("loading");
    // Simulate async operation
    setTimeout(() => {
      if (Math.random() > 0.5) {
        goToState("success");
      } else {
        goToState("error");
      }
    }, 1000);
  };

  const handleReset = (): void => {
    goToState("idle");
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        margin: "10px 0",
      }}
    >
      <h3>Loading Example</h3>
      <p>
        Current state: <strong>{currentState}</strong>
      </p>

      {currentState === "success" && (
        <p style={{ color: "green" }}>Data loaded successfully!</p>
      )}

      {currentState === "error" && (
        <p style={{ color: "red" }}>Failed to load data</p>
      )}

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <Button
          disabled={currentState === "loading"}
          onClick={handleFetch}
          variant="primary"
        >
          {currentState === "loading" ? "Loading..." : "Fetch Data"}
        </Button>

        {currentState !== "idle" && (
          <Button onClick={handleReset} variant="secondary">
            Reset
          </Button>
        )}
      </div>
    </div>
  );
}

// Traffic Light Example Component
function TrafficLightExample(): JSX.Element {
  const [currentState, { goToState }] = useFiniteStateMachine(
    ["red", "yellow", "green"],
    {
      initialState: "red",
    }
  );

  const handleNext = (): void => {
    switch (currentState) {
      case "red":
        goToState("green");
        break;
      case "green":
        goToState("yellow");
        break;
      case "yellow":
        goToState("red");
        break;
    }
  };

  const getColor = (): string => {
    switch (currentState) {
      case "red":
        return "#ff4444";
      case "yellow":
        return "#ffbb33";
      case "green":
        return "#00C851";
      default:
        return "#ccc";
    }
  };

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        margin: "10px 0",
      }}
    >
      <h3>Traffic Light Example</h3>
      <p>
        Current state: <strong>{currentState}</strong>
      </p>

      <div
        style={{
          width: "60px",
          height: "180px",
          backgroundColor: "#333",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "10px 0",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: currentState === "red" ? getColor() : "#666",
          }}
        />
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: currentState === "yellow" ? getColor() : "#666",
          }}
        />
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: currentState === "green" ? getColor() : "#666",
          }}
        />
      </div>

      <Button onClick={handleNext} variant="primary">
        Next State
      </Button>
    </div>
  );
}

// Form Steps Example Component
function FormStepsExample(): JSX.Element {
  const [currentState, { goToState }] = useFiniteStateMachine(
    ["personal-info", "address", "payment", "confirmation"],
    {
      initialState: "personal-info",
    }
  );

  const getStepNumber = (): number => {
    const steps = ["personal-info", "address", "payment", "confirmation"];
    return steps.indexOf(currentState) + 1;
  };

  const handleNext = (): void => {
    switch (currentState) {
      case "personal-info":
        goToState("address");
        break;
      case "address":
        goToState("payment");
        break;
      case "payment":
        goToState("confirmation");
        break;
    }
  };

  const handlePrevious = (): void => {
    switch (currentState) {
      case "address":
        goToState("personal-info");
        break;
      case "payment":
        goToState("address");
        break;
      case "confirmation":
        goToState("payment");
        break;
    }
  };

  const canGoNext = currentState !== "confirmation";
  const canGoPrevious = currentState !== "personal-info";

  return (
    <div
      style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        margin: "10px 0",
      }}
    >
      <h3>Form Steps Example</h3>
      <p>
        Current step: <strong>{currentState}</strong> (Step {getStepNumber()} of
        4)
      </p>

      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "15px",
          borderRadius: "5px",
          margin: "10px 0",
        }}
      >
        <p>
          Step content for: <strong>{currentState}</strong>
        </p>
        <p>This would contain the form fields for this step.</p>
      </div>

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <Button
          disabled={!canGoPrevious}
          onClick={handlePrevious}
          variant="secondary"
        >
          Previous
        </Button>

        <Button disabled={!canGoNext} onClick={handleNext} variant="primary">
          {currentState === "payment" ? "Submit" : "Next"}
        </Button>
      </div>
    </div>
  );
}

// Combined Example Component
function CombinedExample(): JSX.Element {
  return (
    <div>
      <h2>useFiniteStateMachine Hook Examples</h2>
      <p>
        The <code>useFiniteStateMachine</code> hook provides a simple way to
        manage state transitions with a predefined set of possible states.
      </p>

      <ToggleExample />
      <LoadingExample />
      <TrafficLightExample />
      <FormStepsExample />

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
        }}
      >
        <h4>Features:</h4>
        <ul>
          <li>
            <strong>Simple API</strong> - Just provide an array of possible
            states
          </li>
          <li>
            <strong>Type Safety</strong> - TypeScript support with proper type
            checking
          </li>
          <li>
            <strong>Error Handling</strong> - Throws errors for invalid state
            transitions
          </li>
          <li>
            <strong>Flexible</strong> - Works with any string-based state
            machine
          </li>
          <li>
            <strong>Lightweight</strong> - Minimal overhead and dependencies
          </li>
        </ul>

        <h4>Usage:</h4>
        <pre
          style={{
            backgroundColor: "#fff",
            padding: "10px",
            borderRadius: "5px",
            overflow: "auto",
          }}
        >
          {`const [currentState, { goToState }] = useFiniteStateMachine([
  'idle', 'loading', 'success', 'error'
], { initialState: 'idle' });`}
        </pre>
      </div>
    </div>
  );
}

const meta: Meta<typeof CombinedExample> = {
  title: "Hooks/useFiniteStateMachine",
  component: CombinedExample,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "The useFiniteStateMachine hook provides a simple React hook for managing finite state machines with a predefined set of possible states.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const AllExamples: Story = {
  render: () => <CombinedExample />,
};

export const Toggle: Story = {
  render: () => <ToggleExample />,
  parameters: {
    docs: {
      description: {
        story:
          'A simple toggle state machine that switches between "off" and "on" states.',
      },
    },
  },
};

export const Loading: Story = {
  render: () => <LoadingExample />,
  parameters: {
    docs: {
      description: {
        story:
          "A loading state machine that manages different loading states: idle, loading, success, and error.",
      },
    },
  },
};

export const TrafficLight: Story = {
  render: () => <TrafficLightExample />,
  parameters: {
    docs: {
      description: {
        story:
          "A traffic light state machine that cycles through red, yellow, and green states.",
      },
    },
  },
};

export const FormSteps: Story = {
  render: () => <FormStepsExample />,
  parameters: {
    docs: {
      description: {
        story:
          "A multi-step form state machine that manages progression through form steps.",
      },
    },
  },
};
