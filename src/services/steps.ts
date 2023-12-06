import stepsProcessMoveIn from "../mocks/steps-process-move-in.json";
import stepsProcessCheckIn from "../mocks/steps-process-check-in.json";

export const getProcessMoveInSteps = async () => {
  try {
    //fetch from API
    return stepsProcessMoveIn;
  } catch (e) {
    throw new Error("Error getting steps process move in");
  }
};

export const getProcessCheckInSteps = async () => {
  try {
    //fetch from API
    return stepsProcessCheckIn;
  } catch (e) {
    throw new Error("Error getting steps process check in");
  }
};
