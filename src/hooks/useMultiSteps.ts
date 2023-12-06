import { useEffect, useState } from "react";

//types
import { UseMultiStepsProps } from "../types";

//constants
import { COMPLETED_STATE, READY_STATE } from "../utils/constants";

export function useMultiStep({
  stepsUpdated,
  setStepsUpdated,
  updateSteps,
  exitSteps,
}: UseMultiStepsProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    const indexFirstReady = stepsUpdated.findIndex(
      (step) => step.state === READY_STATE
    );
    if (indexFirstReady > -1 && currentStepIndex !== indexFirstReady) {
      setCurrentStepIndex(indexFirstReady);
    }
  }, []);

  function next() {
    const newSteps = [
      ...stepsUpdated.slice(0, currentStepIndex),
      { ...stepsUpdated[currentStepIndex], state: COMPLETED_STATE },
      ...stepsUpdated.slice(currentStepIndex + 1),
    ];

    setStepsUpdated(newSteps);

    const lastStep = stepsUpdated.length - 1;
    if (currentStepIndex >= lastStep) {
      updateSteps([...newSteps]);
      return;
    }

    setCurrentStepIndex(currentStepIndex + 1);
  }

  function back() {
    if (currentStepIndex <= 0) {
      exitSteps();
      return;
    }
    setCurrentStepIndex(currentStepIndex - 1);
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    stepsUpdated,
    step: stepsUpdated[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === stepsUpdated.length - 1,
    goTo,
    next,
    back,
  };
}
