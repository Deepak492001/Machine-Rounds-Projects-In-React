import { useState } from "react";

export default function Stepper({ stepsConfig = [] }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [isComplete, setIsComplete] = useState(false);
    if (!stepsConfig.length)
        return <></>;
    function handleNext() {
        
    }
    return (
       <>
    <div className="stepper">
      {stepsConfig.map((step, index) => {
        return (
          <div key={step.name}
            className={`step ${currentStep > index + 1 || isComplete ? "complete" : ""}${currentStep === index + 1 ? "active" : ""}`}
            >
            <div className="step-number">{currentStep > index + 1 || isComplete ? <span>&#10003</span> :index+1}</div>
                <div className="step-name"
                >{ step.name}</div>
          </div>
        );
      })}
            </div>

            <div className="progress-bar">
                <div className="progress">

                </div>
            </div>

    {!isComplete && (
        <button className="btn" onClick={handleNext}>
          {currentStep === stepsConfig.length ? "Finish" : "Next"}
        </button>
    )
    }
   </>
  );
}
