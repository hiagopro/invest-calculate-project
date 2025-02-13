"use client"
const Result: React.FC = ({result, preorpos, typeInvestFinal, rentabilidade, duration, investmentInitial, investmentMonthly}) => {
    return (
      <div className="flex flex-col justify-center px-6 bg-purple-50">
        <h1 className=" py-5 text-xl font-bold">Minha simulacao</h1>
        
      <div className=" grid grid-cols-2 gap-3">
        <div className="bg-white flex flex-col h-16 ">
          <h1 className=" text-xs m-auto">Tipo de Investimento</h1>
          <p className="m-auto">{typeInvestFinal}</p>
          </div>
          <div className="bg-white flex flex-col h-16 ">
            <h1 className=" text-xs m-auto">É PRÉ fixado ou PÓS fixado?</h1>
          <p className="m-auto">{preorpos}</p>
          </div>
          <div className="bg-white flex flex-col  ">
            <h1 className=" text-xs m-auto">investimento inicial</h1>
            <p className="m-auto">{investmentInitial}</p>
            </div>
            <div className="bg-white flex flex-col  ">
              <h1 className=" text-xs m-auto">investimento mensal</h1>
              <p className="m-auto" >{investmentMonthly}</p>
            </div>
            <div className="bg-white flex flex-col  ">
              <h1 className=" text-xs m-auto">Prazo</h1>
              <p className="m-auto" >{duration} meses</p>
            </div>
            <div className="bg-white flex flex-col  ">
              <h1 className=" text-xs m-auto">rentabilidade</h1>
              <p className="m-auto" >{rentabilidade}%</p>
            </div>
        </div>
      </div>
    );
  };
  
  export default Result;
  