"use client"
import Hero from "./components/Hero";
import Result from "./components/Result";
import React, { useState } from "react";

export default function Home() {
  const [result, setResult] = useState(0)
  const [typeInvestFinal, setTypeInvestFinal] =useState('')
  const [preorpos, setPreorpos] = useState('')
  const [investmentInitial, setInvestmentInitial] = useState(0)
  const [investmentMonthly, setInvestmentMonthly]= useState(0)
  const [duration, setDuration] = useState(0)
  const [rentabilidade, setRentabilidade]= useState(0)
  
  return (
    <div>
    <Hero setResult={setResult} result={result} setTypeInvestFinal={setTypeInvestFinal} setPreorpos={setPreorpos}
     setInvestmentInitialOn={setInvestmentInitial} setRentabilidade={setRentabilidade} setDurationOn={setDuration} setInvestmentMonthlyOn={setInvestmentMonthly}/>
    <Result result={result} preorpos={preorpos} typeInvestFinal={typeInvestFinal} investmentInitial={investmentInitial} duration={duration} rentabilidade={rentabilidade} investmentMonthly={investmentMonthly}/>
    </div>
  );
}
