import Header from "./components/Header"
import InputField from "./components/InputField"
import Results from "./components/Results"
import { useState } from "react"
function App() {
  const [initialInvestment, setinitialInvestment] = useState(10000)
  const [annualInvestment, setannualInvestment] = useState(1200)
  const [duration, setduration] = useState(10)
  const [expectedReturn, setexpectedReturn] = useState(6)
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <Header />
        <InputField
          initialInvestment={initialInvestment}
          setinitialInvestment={setinitialInvestment}
          annualInvestment={annualInvestment}
          setannualInvestment={setannualInvestment}
          duration={duration}
          setduration={setduration}
          expectedReturn={expectedReturn}
          setexpectedReturn={setexpectedReturn}
        />
        {duration>=1? <Results
          initialInvestment={initialInvestment}
          annualInvestment={annualInvestment}
          expectedReturn={expectedReturn}
          duration={duration} />:<h2 className="text-lg text-red-600 font-semibold  min-[350px]:ml-5">Please enter the valid duration, duration must be greater or equal to 1</h2>}
       
    </div>
  )
}

export default App
