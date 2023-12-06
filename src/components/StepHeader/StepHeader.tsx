//styles
import "./StepHeader.css";

//types
import { StepHeaderProps } from "../../types";

//constants
import { COMPLETED_STATE } from "../../utils/constants";

export default function StepHeader({
  stepsHeader,
  currentStepIndex,
  title
}: StepHeaderProps) {
  return (
    <div>
      <h3>{title}</h3>
      <div className="steps-header">
        {stepsHeader?.length > 0 &&
          stepsHeader.map((step, index) => (
            <div
              key={index}
              className={`item ${currentStepIndex === index ? "title-focus" : step.state !== COMPLETED_STATE ? "color-gray" : ""}`}
            >
              <div className="icon">{step.state === COMPLETED_STATE ? <div>&#10004;&#65039;</div> : ""}</div> {step.title}
            </div>
          ))}
      </div>
    </div>
  )
}
