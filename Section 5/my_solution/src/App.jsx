import { useState } from "react";
import Header from "./components/Header";
import InputGroup from "./components/Input";
import Result from "./components/Result";
import UserInput from "./components/UserInput";

function App() {
  const [annualData,setAnnualData]=useState([]);
  return (
    <div className="center">
      <Header />
      {/* <InputGroup/> */}
      <UserInput setAnnualData={setAnnualData}/>
      <Result annualData={annualData}/>
    </div>
  );
}

export default App;
