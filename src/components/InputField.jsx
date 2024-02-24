import React from 'react'
import InputGroup from './InputGroup'
function InputField({
  initialInvestment,
  setinitialInvestment,
  annualInvestment,
  setannualInvestment,
  duration,
  setduration,
  expectedReturn,
  setexpectedReturn
}) {
  return (
    <div className=' w-96 h-60 bg-green-700 rounded-xl shadow-md shadow-green-600 min-[350px]:h-52 min-[350px]:p-2 min-[350px]:ml-7 min-[400px]:ml-2'>
        <div className='grid grid-rows-1 grid-cols-2 gap-10 place-items-center'>
            <InputGroup title={'Initial Investment'} values={initialInvestment} onchange={setinitialInvestment}/>
            <InputGroup title={'Anual Investment'} values={annualInvestment} onchange={setannualInvestment}/>
            <InputGroup title={'Expected Return'} values={expectedReturn} onchange={setexpectedReturn}/>
            <InputGroup title={'Duration'} values={duration} onchange={setduration}/>
        </div>
    </div>
  )
}

export default InputField
