import { StepProps } from "../../types";

export default function Step({ step }: StepProps) {
  const StepComponent = step.component;
  return StepComponent && <StepComponent />;
}
