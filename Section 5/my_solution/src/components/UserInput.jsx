import { useEffect, useState } from "react";
import InputGroup from "./Input";
import { calculateInvestmentResults } from "../util/investment";

export default function UserInput({ setAnnualData }) {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  function handleChangeInitialInvestment(even) {
    
    setInitialInvestment(Number(even.target.value));
  }
  function handleChangeAnnualInvestment(even) {
    setAnnualInvestment(Number(even.target.value));
  }
  function handleChangeExpectedReturn(even) {
    setExpectedReturn(Number(even.target.value));
  }
  function handleChangeDuration(even) {
    setDuration(Number(even.target.value));
  }

  useEffect(() => {
    const annualData = calculateInvestmentResults({
      initialInvestment: initialInvestment,
      annualInvestment: annualInvestment,
      expectedReturn: expectedReturn,
      duration: duration,
    });
    console.log("annualData UPDATED");
    console.log("initialInvestment",initialInvestment + initialInvestment);
    console.log("annualInvestment",annualInvestment);
    console.log("expectedReturn",expectedReturn);
    console.log("duration",duration);
    setAnnualData(annualData);
  }, [initialInvestment, annualInvestment, expectedReturn, duration]);
  // setAnnualData(annualData);

  return (
    <div id="user-input">
      <div className="input-group">
        <InputGroup
          text="Initial Investment"
          value={initialInvestment}
          onChange={handleChangeInitialInvestment}
        />
        <InputGroup
          text="Annual Investment"
          value={annualInvestment}
          onChange={handleChangeAnnualInvestment}
        />
      </div>
      <div className="input-group">
        <InputGroup
          text="Expected Return"
          value={expectedReturn}
          onChange={handleChangeExpectedReturn}
        />
        <InputGroup
          text="Duration"
          value={duration}
          onChange={handleChangeDuration}
        />
      </div>
    </div>
  );
}
