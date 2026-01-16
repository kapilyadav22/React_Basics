import { useState } from "react";

const steps = [
  { id: 1, label: "Account Info" },
  { id: 2, label: "Profile Details" },
  { id: 3, label: "Confirmation" },
];

function Stepper() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  return (
    <div style={{ width: "400px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {steps.map(step => (
          <div
            key={step.id}
            style={{
              textAlign: "center",
              flex: 1,
            }}
          >
            <div
              style={{
                width: "30px",
                height: "30px",
                margin: "0 auto",
                borderRadius: "50%",
                background:
                  step.id <= currentStep ? "#1976d2" : "#ccc",
                color: "#fff",
                lineHeight: "30px",
              }}
            >
              {step.id}
            </div>
            <small>{step.label}</small>
          </div>
        ))}
      </div>

      {/* Content */}
      <div style={{ margin: "20px 0" }}>
        <h4>Step {currentStep}</h4>
        <p>{steps[currentStep - 1].label} content goes here.</p>
      </div>

      {/* Navigation */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={prevStep} disabled={currentStep === 1}>
          Back
        </button>
        <button
          onClick={nextStep}
          disabled={currentStep === steps.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Stepper;
