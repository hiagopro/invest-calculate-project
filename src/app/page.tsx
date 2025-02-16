"use client"
import Hero from "./components/Hero";
import Result from "./components/Result";
import React, { useState } from "react";

export default function Home() {
  const [result, setResult] = useState<number>(0);
  const [typeInvestFinal, setTypeInvestFinal] = useState<string>('');
  const [preorpos, setPreorpos] = useState<string>('');
  const [investmentInitial, setInvestmentInitial] = useState<number>(0);
  const [investmentMonthly, setInvestmentMonthly] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [rentabilidade, setRentabilidade] = useState<number>(0);
  const [valueinvested, setValueInvested] = useState<number>(0);
  const [fees, setFees] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
   
  return (
    <div className="pb-7 bg-white">
    <Hero setResult={setResult} result={result} setTypeInvestFinal={setTypeInvestFinal} setPreorpos={setPreorpos}
     setInvestmentInitialOn={setInvestmentInitial} setRentabilidade={setRentabilidade} setDurationOn={setDuration}
     typeInvestFinal={typeInvestFinal}
      setInvestmentMonthlyOn={setInvestmentMonthly} setValueInvested={setValueInvested} preorpos={preorpos} setFees ={setFees} setShowResult={setShowResult} showResult={showResult} />
    {showResult && (<Result result ={result} preorpos={preorpos} typeInvestFinal={typeInvestFinal} 
    investmentInitial={investmentInitial} duration={duration} rentabilidade={rentabilidade} investmentMonthly={investmentMonthly} valueinvested={valueinvested} fees={fees}/>)  }
    
    </div>
  );
}
