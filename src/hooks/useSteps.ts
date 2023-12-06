import { useState } from "react";
import {
  getProcessMoveInSteps,
  getProcessCheckInSteps,
} from "../services/steps";
import { Step, UseStepsProps } from "../types";
import { useStepMapper } from "./useStepMapper";
import {
  PROCESS_MOVE_IN,
  PROCESS_CHECK_IN,
  PROCESS_MOVE_IN_TITLE,
  PROCESS_CHECK_IN_TITLE,
} from "../utils/constants";

export function useSteps({ type }: UseStepsProps) {
  const [steps, setSteps] = useState([] as Step[]);
  let title = "";
  let updateSteps: any = () => {};
  let exitSteps: any = () => {};

  if (type === PROCESS_MOVE_IN) {
    title = PROCESS_MOVE_IN_TITLE;
    getProcessMoveInSteps().then((response: Step[]) => setSteps(response));
    updateSteps = (data: any) => {
      alert(JSON.stringify(data));
    };

    exitSteps = () => {
      alert("Are you sure?");
    };
  }

  if (type === PROCESS_CHECK_IN) {
    title = PROCESS_CHECK_IN_TITLE;
    getProcessCheckInSteps().then((response: Step[]) => setSteps(response));
  }

  const stepsMapped: Step[] = useStepMapper({
    steps,
    type,
  });

  return { steps: stepsMapped, title, updateSteps, exitSteps };
}
