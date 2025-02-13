"use client"
import React, { useState } from "react";

// import { Container } from './styles';

const Hero: React.FC = () => {
  const [investmentInitial, setInvestmentInitial] = useState(0);
  const [investmentMonthly, setInvestmentMonthly] = useState(0);
  const [duration, setDuration] = useState(0);
  const [durationUnit, setDurationUnit] = useState("months");
  const [rate, setRate] = useState(0);
  const [typeInvest,setTypeInvest] = useState('')
  const [preorpos, setPreorpos] = useState('')
  const handlecalculate = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(investmentInitial)
    console.log(investmentMonthly)

    const totalMonths = durationUnit === "years" ? duration * 12 : duration;
    const monthlyRate = rate / 100 / 12;

    
    const futureValue = investmentInitial * Math.pow(1 + monthlyRate, totalMonths) +
                        investmentMonthly * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);


    console.log(futureValue.toFixed(2))
  }
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypeInvest(e.target.value);
  
  };
  
  return (
    <div className="flex py-4">
      <div className=" flex flex-col  w-11/12 m-auto bg-purple-50 rounded-lg px-6 py-4 gap-2">
        <h1 className="font-Heebo font-bold text-2xl">Calculadora de Investimentos Online</h1>
        <div className="flex flex-col gap-2 ">
          <div className="flex flex-col gap-4 pb-4">
            <p>Tipo de investimento</p>
            <form action="" className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input type="radio" name="typeInvest" value="CDB/LC/Títulos públicos/Debêntures"
          onChange={handleRadioChange}/>
                <label htmlFor="CDB/LC/Títulos públicos/Debêntures">
                  CDB/LC/Títulos públicos/Debêntures
                </label>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="typeInvest" value="LCI/LCA"
          onChange={handleRadioChange}/>
                <label htmlFor="LCI/LCA">LCI/LCA</label>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="typeInvest"  value="Tesouro"
          onChange={handleRadioChange}/>
                <label htmlFor="Tesouro">Tesouro</label>
              </div>
            </form>
          </div>
          <div className="flex flex-col gap-4 py-4">
            <h1>É PRÉ fixado ou PÓS fixado?</h1>
            <form action="" className="flex gap-4 flex-col">
              <div className="flex  gap-2">
                {" "}
                <input type="radio" name="preouPos" />
                <label htmlFor="Pre">PRÉ</label>
              </div>
              <div className="flex  gap-2">
                {" "}
                <input type="radio" name="preouPos" />
                <label htmlFor="PÓS">PÓS</label>
              </div>
              <div className="flex  gap-2">
                {" "}
                <input type="radio" name="preouPos" />
                <label htmlFor="IPCA">IPCA</label>
              </div>
            </form>
          </div>
        </div>
        <div>
            <form action="" className="flex flex-col  gap-6 " onSubmit={handlecalculate}>
           <div className="flex flex-col ">
            <label htmlFor="" className="text-sm">investimento inicial</label>
            <div className="flex items-center border  border-gray-200 rounded-lg bg-gray-200">
              <span className="text-sm text-gray-900 mx-4 ">R$</span>
              <input type="number" value={investmentInitial}
          onChange={(e) => setInvestmentInitial(parseFloat(e.target.value))} className="flex-1   outline-none text-sm px-2 py-2 placeholder:" placeholder="0,00"/>
            </div>
            </div>
            <div className="flex flex-col ">
            <label htmlFor="" className="text-sm">investimento mensal</label>
            <div className="flex items-center border  border-gray-200 rounded-lg bg-gray-200">
              <span className="text-sm text-gray-900 mx-4 ">R$</span>
              <input type="number" className="flex-1   outline-none text-sm px-2 py-2 placeholder:" value={investmentMonthly}
          onChange={(e) => setInvestmentMonthly(parseFloat(e.target.value))} placeholder="0,00"/>
            </div>
            </div>
            <div>
              <label htmlFor="">Prazo</label>
              <div className="flex items-center border border-gray-300 rounded-lg ">
                <input type="number" id="durationValue" className="flex-1  outline-none text-sm pl-2 py-2  "  value={duration}
          onChange={(e) => setDuration(parseInt(e.target.value))}
 placeholder="0" min="0"/>
                <select id="durationUnit" className="ml-2 bg-transparent text-sm text-gray-700 border-none outline-none px-3 py-2 ">
                <option value="months">Meses</option>

                  <option value="years">Anos</option>
                </select>
              </div>
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="" className="pb-3">Rentabilidade</label>
              <div className="flex  items-center rounded-lg border border-gray-300 ltr">
                <span className="text-sm text-gray-900 px-4 bg-gray-200  py-2 rounded-s-lg">%</span>
                <input type="number"  value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))} className="flex-1   outline-none text-sm  py-2 placeholder:" placeholder="0,00"/>
                <select id="anualVariament" className="ml-2 bg-transparent text-sm text-gray-700 border-none outline-none px-3 py-2 ">
                  <option className="" value="years">Anual</option>
                  <option className="" value="months">Mesal</option>
                </select>
              </div>
            </div>
           <div className="flex justify-center flex-col py-4 gap-5">
            <button type="submit"
          className="bg-purple-500 py-4 rounded-lg text-white px-20 text-lg font-bold">Calcular </button>
            <button className="border-none bg-transparent text-purple-500 font-bold">LIMPAR</button>
            </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
