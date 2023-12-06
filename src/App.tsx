import "./App.css";
import MultiSteps from "./components/MultiSteps/MultiSteps";
import { useSteps } from "./hooks/useSteps";
import { PROCESS_MOVE_IN } from "./utils/constants";

function App() {
  const { steps, title, updateSteps, exitSteps } = useSteps({ type: PROCESS_MOVE_IN });
  return (
    <>
      {steps?.length > 0 && <MultiSteps title={title} steps={steps} updateSteps={updateSteps} exitSteps={exitSteps} />}
    </>
  );
}

export default App;
