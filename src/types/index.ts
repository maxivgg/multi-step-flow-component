import { Dispatch, ReactNode, SetStateAction } from "react";

export interface Step {
  type: string;
  state: string;
  title?: string;
  component?: (() => ReactNode) | null;
}

export interface MultiSteps {
  currentStepIndex: number;
  step: Step;
  isFirstStep: boolean;
  isLastStep: boolean;
  back: () => void;
  next: () => void;
}

export interface StepHeader {
  state: string;
  title?: string;
}

// types props components

export interface StepProps {
  step: Step;
}

export interface MultiStepsProps {
  title: string;
  steps: Step[];
  updateSteps: () => void;
  exitSteps: () => void;
}

export interface StepHeaderProps {
  stepsHeader: StepHeader[];
  currentStepIndex: number;
  title: string;
}

export interface StepFooterProps {
  isFirstStep: boolean;
  isLastStep: boolean;
  back: () => void;
  next: () => void;
}

export interface StepMapperProps {
  steps: Step[];
  type: string;
}

export interface UseMultiStepsProps {
  stepsUpdated: Step[];
  setStepsUpdated: Dispatch<SetStateAction<Step[]>>;
  updateSteps: (data: any) => void;
  exitSteps: () => void;
}

export interface UseStepsProps {
  type: string;
}
