import { useState } from "react";

/**
 * Hook responsável por gerenciar todos os possíveis estados finitos, dando
 * acesso a apenas um deles por vez.
 * @param possibleStates - Array of possible states
 * @param options - Configuration options
 */
interface UseFiniteStateMachineOptions {
  initialState?: string;
}

const useFiniteStateMachine = (
  possibleStates: string[],
  { initialState }: UseFiniteStateMachineOptions = {}
): readonly [string, { goToState: (newState: string) => void }] => {
  const [currentState, setCurrentState] = useState(() => {
    if (initialState && !possibleStates.includes(initialState))
      throw new Error(
        `Unknown state for the initial value: "${initialState}".`
      );
    return initialState ?? possibleStates[0];
  });

  const goToState = (newState: string): void => {
    if (possibleStates.includes(newState)) {
      setCurrentState(newState);
      return;
    }
    throw new Error(
      `Invalid state "${newState}" for the finite state machine.`
    );
  };

  return [currentState, { goToState }] as const;
};

export { useFiniteStateMachine };
