"use client"
interface ResultProps {
  result: number;
  preorpos: string;
  typeInvestFinal: string;
  investmentInitial: number;
  duration: number;
  rentabilidade: number;
  investmentMonthly: number;
  valueinvested: number;
  fees: number;
}
const Result: React.FC<ResultProps> = ({result, preorpos, typeInvestFinal, rentabilidade, duration, investmentInitial, investmentMonthly, valueinvested, fees}:any) => {
    
  
  return (
      <div className="flex flex-col justify-center px-6 bg-purple-50 py-8 w-11/12 m-auto rounded-lg">
        <h1 className=" py-5 text-xl font-bold">Minha simulação</h1>
        
      <div className=" grid grid-cols-2 gap-3">
        <div className="bg-white flex flex-col h-16 rounded-sm">
          <h1 className=" text-xs m-auto">Tipo de Investimento</h1>
          <p className="m-auto font-bold text-sm">{typeInvestFinal}</p>
          </div>
          <div className="bg-white flex flex-col h-16 rounded-sm">
            <h1 className=" text-xs m-auto">É PRÉ fixado ou PÓS fixado?</h1>
          <p className="m-auto font-bold text-sm">{preorpos}</p>
          </div>
          <div className="bg-white flex flex-col  rounded-sm">
            <h1 className=" text-xs m-auto">investimento inicial</h1>
            <p className="m-auto font-bold">{investmentInitial}</p>
            </div>
            <div className="bg-white flex flex-col rounded-sm ">
              <h1 className=" text-xs m-auto">investimento mensal</h1>
              <p className="m-auto font-bold" >{investmentMonthly}</p>
            </div>
            <div className="bg-white flex flex-col rounded-sm ">
              <h1 className=" text-xs m-auto">Prazo</h1>
              <p className="m-auto font-bold" >{duration} meses</p>
            </div>
            <div className="bg-white flex flex-col rounded-sm ">
              <h1 className=" text-xs m-auto">rentabilidade</h1>
              <p className="m-auto font-bold" >{rentabilidade}%</p>
            </div>
        </div>
        <h1 className=" py-5 text-xl font-bold">Resultado</h1>
        <div className="grid grid-cols-1 gap-3 m-auto w-11/12 rounded-sm">
          <div className="bg-white flex flex-col h-16 ">
            <h1 className="bg-white flex flex-col h-16 m-auto">Valor Total Bruto</h1>
            <p className="m-auto font-bold">{result.toFixed(2)} R$</p>
          </div>
          <div className="bg-white flex flex-col h-16 rounded-sm">
            <h1 className="bg-white flex flex-col h-16 m-auto">Valor total Investido </h1>
            <p className="m-auto font-bold">{valueinvested.toFixed(2)} R$</p>
          </div>
          <div className="bg-white flex flex-col h-16 rounded-sm">
            <h1 className="bg-white flex flex-col h-16 m-auto">Valor em Juros </h1>
            <p id="result" className="m-auto font-bold">{fees} R$</p>

          </div>
        </div>
      </div>
    );
  };
  
  export default Result;
  