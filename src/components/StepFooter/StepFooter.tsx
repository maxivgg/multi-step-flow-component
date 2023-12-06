//styles
import './StepFooter.css'

//types
import { StepFooterProps } from "../../types";

export default function StepFooter({
  isFirstStep,
  isLastStep,
  back,
  next,
}: StepFooterProps) {
  const textFirstButton = !isLastStep ? "Continue" : "Complete";
  const textSecondaryButton = !isFirstStep ? "Back" : "Exit";
  const onClickFirstButton = () => {
    next();
    return;
  };
  const onClickSecondaryButton = () => {
    back();
    return;
  };
  return (
    <div className="steps-footer">
      <button onClick={onClickSecondaryButton}>{textSecondaryButton}</button>
      <button onClick={onClickFirstButton}>{textFirstButton}</button>
    </div>
  );
}
