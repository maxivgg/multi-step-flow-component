import CompleteMoveIn from "../components/CompleteMoveIn/CompleteMoveIn";
import ConfirmBooking from "../components/ConfirmBooking/ConfirmBooking";
import ReviewOrder from "../components/ReviewOrder/ReviewOrder";
import { StepMapperProps } from "../types";
import { PROCESS_MOVE_IN, STEP_1, STEP_2, STEP_3 } from "../utils/constants";

export function useStepMapper({ steps, type }: StepMapperProps) {
  return steps.map((step) => {
    let title = "";
    let component = null;

    if (type === PROCESS_MOVE_IN) {
      if (step.type === STEP_1) {
        title = "Confirm booking";
        component = ConfirmBooking;
      } else if (step.type === STEP_2) {
        title = "Review order";
        component = ReviewOrder;
      } else if (step.type === STEP_3) {
        title = "Complete move-in";
        component = CompleteMoveIn;
      }
    }

    return {
      title,
      component,
      ...step,
    };
  });
}
