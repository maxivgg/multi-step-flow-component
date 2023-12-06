//components
import Step from "../Step/Step";
import StepHeader from "../StepHeader/StepHeader";
import StepFooter from "../StepFooter/StepFooter";

//styles
import './MultiSteps.css'

// hooks
import { useMultiStep } from "../../hooks/useMultiSteps";

// types
import { MultiStepsProps, MultiSteps, StepHeader as StepHeaderType } from "../../types";
import { useEffect, useState } from "react";

export default function MultiSteps({ title, steps, updateSteps, exitSteps }: MultiStepsProps) {
  const [stepsHeader, setStepsHeader] = useState([] as StepHeaderType[])
  const [stepsUpdated, setStepsUpdated] = useState(steps);

  const {
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
  }: MultiSteps = useMultiStep({ stepsUpdated, setStepsUpdated, updateSteps, exitSteps });

  useEffect(() => {
    const stepsHeaderMapped = stepsUpdated?.map((step) => ({
      title: step.title,
      state: step.state,
    }));
    setStepsHeader(stepsHeaderMapped)
  }, [stepsUpdated])

  return (
    <div className="multi-steps">
      <StepHeader
        stepsHeader={stepsHeader}
        currentStepIndex={currentStepIndex}
        title={title}
      />
      <Step step={step} />
      <StepFooter
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
        back={back}
        next={next}
      />
    </div>
  );
}
