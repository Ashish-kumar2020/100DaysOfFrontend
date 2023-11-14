import React, { useState } from "react";
import "../index.css";

const Steps = () => {
  const [step, setStep] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  return (
    <>
      <button
        style={{
          backgroundColor: "#7950f2",
          color: "#fff",
          borderRadius: "50px",
          width: "90px",
          height: "30px",
          paddingLeft: "38px",
          paddingTop: "8px",
          border: "0px",
        }}
        className="buttons"
        onClick={() => {
          if (isVisible) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }
        }}
      >
        X
      </button>
      {isVisible ? (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step} : {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => {
                if (step > 1) setStep(step - 1);
              }}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => {
                if (step < 3) setStep(step + 1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Steps;
