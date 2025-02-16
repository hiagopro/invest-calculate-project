"use client"
import React, { useEffect, useState } from "react";


// import { Container } from './styles';
interface HeroProps {
  setResult: React.Dispatch<React.SetStateAction<number>>;
  result: number;
  setTypeInvestFinal: React.Dispatch<React.SetStateAction<string>>;
  setPreorpos: React.Dispatch<React.SetStateAction<string>>;
  setInvestmentInitialOn: React.Dispatch<React.SetStateAction<number>>;
  setRentabilidade: React.Dispatch<React.SetStateAction<number>>;
  setDurationOn: React.Dispatch<React.SetStateAction<number>>;
  setInvestmentMonthlyOn: React.Dispatch<React.SetStateAction<number>>;
  setValueInvested: React.Dispatch<React.SetStateAction<number>>;
  setFees: React.Dispatch<React.SetStateAction<number>>;
  setShowResult: React.Dispatch<React.SetStateAction<boolean>>;
  preorpos: string;
  showResult: boolean;
  typeInvestFinal: string;
  
}
const Hero: React.FC<HeroProps> = ({setResult, result, setTypeInvestFinal, setPreorpos,
  setInvestmentInitialOn, setRentabilidade, setDurationOn, setInvestmentMonthlyOn, setValueInvested,preorpos, setFees, setShowResult, showResult, typeInvestFinal }) => {
  const [investmentInitial, setInvestmentInitial] = useState<number>(0);
  const [investmentMonthly, setInvestmentMonthly] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [durationUnit, setDurationUnit] = useState<string>("months");
  const [rate, setRate] = useState<number>(0);
  const [anualormensal, setAnulormensal]= useState<string>("anual")
  

  let  futureValue
  const handlecalculate = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(investmentInitial)
    console.log(rate)

    const totalMonths = durationUnit === "years" ? duration * 12 : duration;
    const monthlyRate = anualormensal === "anual" ? rate / 100 / 12 : rate /100;

    
     futureValue =  investmentInitial * Math.pow(1 + monthlyRate, totalMonths ) +
                        investmentMonthly * ((Math.pow(1+ monthlyRate, totalMonths) -1) / monthlyRate);
    const valueinvested = investmentInitial   +  totalMonths*investmentMonthly
    const fees =  futureValue -valueinvested
    setFees(fees)
    setValueInvested(valueinvested)
    setInvestmentMonthlyOn(investmentMonthly)
    setInvestmentInitialOn(investmentInitial)
    setRentabilidade(rate)
    setDurationOn(totalMonths)
    setResult(futureValue)
    console.log(result)
  }
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTypeInvestFinal(e.target.value);
    console.log(e.target.value)
  };
  const handlePreorpos = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreorpos(e.target.value);
    console.log(e.target.value)
  }
  const ShowResult =()=>{
    if( investmentInitial > 0 && investmentMonthly > 0 && rate > 0 && duration > 0 && preorpos != '' && typeInvestFinal != '' ){
      setShowResult(true)
    }else{
      alert('Preencha todos os campos')
    }
    
    
    
  }
  const handleClear = () => {
    setInvestmentInitial(0);
    setInvestmentMonthly(0);
    setDuration(0);
    setDurationUnit("months");
    setRate(0);
    setPreorpos("");
    setTypeInvestFinal("");
    setResult(0);
    setShowResult(false);
    setFees(0);
    setValueInvested(0);
  };
  useEffect(()=>{
   if(showResult === true){
     const resultSection = document.getElementById('result');
     if (resultSection) {
      resultSection.scrollIntoView({ behavior: 'smooth' });
    }
   }
  }, [showResult])
  
  return (
    <div className="flex py-4 ">
      <div className=" flex flex-col  w-11/12 m-auto bg-purple-50 rounded-lg px-6 py-4 gap-2">
        <h1 className="font-Heebo font-bold text-2xl text-black">Calculadora de Investimentos Online</h1>
        <div className="flex flex-col gap-2 ">
          <div className="flex flex-col gap-4 pb-4">
            <p className="text-black">Tipo de investimento</p>
            <form action="" className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input type="radio" name="typeInvest" value="CDB/LC/Títulos públicos/Debêntures"
          onChange={handleRadioChange}/>
                <label htmlFor="CDB/LC/Títulos públicos/Debêntures " className="text-black">
                  CDB/LC/Títulos públicos/Debêntures
                </label>
              </div>
              <div className="flex gap-2">
                <input type="radio" name="typeInvest" value="LCI/LCA"
          onChange={handleRadioChange} />
                <label className="text-black" htmlFor="LCI/LCA">LCI/LCA</label >
              </div>
              <div className="flex gap-2">
                <input type="radio" name="typeInvest"  value="Tesouro"
          onChange={handleRadioChange}/>
                <label htmlFor="Tesouro" className="text-black">Tesouro</label>
              </div>
            </form>
          </div>
          <div className="flex flex-col gap-4 py-4">
            <h1 className="text-black">É PRÉ fixado ou PÓS fixado?</h1>
            <form action="" className="flex gap-4 flex-col">
              <div className="flex  gap-2">
                {" "}
                <input type="radio" name="preouPos" value="PRÉ" onChange={handlePreorpos}/>
                <label htmlFor="Pre" className="text-black">PRÉ</label>
              </div>
              <div className="flex  gap-2">
                {" "}
                <input type="radio" name="preouPos" value="PÓS" onChange={handlePreorpos}/>
                <label htmlFor="PÓS" className="text-black">PÓS</label>
              </div>
              <div className="flex  gap-2">
                {" "}
                <input type="radio" name="preouPos" value="IPCA" onChange={handlePreorpos}/>
                <label htmlFor="IPCA" className="text-black">IPCA</label>
              </div>
            </form>
          </div>
        </div>
        <div>
            <form action="" className="flex flex-col  gap-6 " onSubmit={handlecalculate}>
           <div className="flex flex-col ">
            <label htmlFor="" className="text-sm text-black">investimento inicial</label>
            <div className="flex items-center border  border-gray-200 rounded-lg bg-gray-200">
              <span className="text-sm text-gray-900 mx-4 ">R$</span>
              <input type="number" value={investmentInitial} required
          onChange={(e) => setInvestmentInitial(parseFloat(e.target.value))} className="flex-1 text-black   outline-none text-sm px-2 py-2 placeholder:" placeholder="0,00"/>
            </div>
            </div>
            <div className="flex flex-col ">
            <label htmlFor="" className="text-sm text-black">investimento mensal</label>
            <div className="flex items-center border  border-gray-200 rounded-lg bg-gray-200">
              <span className="text-sm text-gray-900 mx-4 ">R$</span>
              <input type="number" className="flex-1 text-black  outline-none text-sm px-2 py-2 placeholder:" value={investmentMonthly}
          onChange={(e) => setInvestmentMonthly(parseFloat(e.target.value))} placeholder="0,00"/>
            </div>
            </div>
            <div>
              <label htmlFor="" className=" text-black">Prazo</label>
              <div className="flex items-center border border-gray-300 rounded-lg ">
                <input type="number" id="durationValue" className=" flex-1  outline-none text-sm pl-2 py-2 text-black "  value={duration}
          onChange={(e) => setDuration(parseInt(e.target.value))}
 placeholder="0" min="0"/>
                <select onChange={(e) => setDurationUnit(e.target.value) } id="durationUnit" className=" ml-2 bg-transparent text-sm text-gray-700 border-none outline-none w-1/4 py-2  ">
                <option value="months" className="">Meses</option>

                  <option value="years" >Anos</option>
                </select>
              </div>
            </div>
            
            <div className="flex flex-col">
              <label htmlFor="" className="pb-3 text-black">Rentabilidade</label>
              <div className="flex  items-center rounded-lg border border-gray-300 ltr">
                <span className="text-sm text-gray-900 px-4 bg-gray-200  py-2 rounded-s-lg">%</span>
                <input type="number"  value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))} className="flex-1 text-black   outline-none text-sm pl-2  py-2 placeholder:" placeholder="0,00"/>
                <select onChange={(e)=> setAnulormensal(e.target.value)} id="anualVariament" className=" bg-transparent text-sm text-gray-700 border-none outline-none ml-2 py-2 w-1/4   ">
                  <option className="" value="years">Anual</option>
                  <option className="" value="months">Mensal</option>
                </select>
              </div>
            </div>
           <div className="flex justify-center flex-col py-4 gap-5">
            <button type="submit"
          className="bg-purple-500 py-4 rounded-lg text-white  text-lg font-bold md:w-1/4 md:m-auto md:align-center" onClick={ShowResult} >Calcular</button>
            <button  className="border-none bg-transparent text-purple-500 font-bold" onClick={handleClear}>LIMPAR</button>
            </div>
            </form>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
