import React from 'react'
// import { useState } from 'react'
function InputGroup({title,values,onchange}) {
  // const [value, setvalue] = useState(values)
  // function handelInput(e){
  //   setvalue(e.target.value)
  // }
  return (
    <div className='flex flex-col gap-2'>
      <span className='text-white'>{title}</span>
      <input required type="number" value={values} onChange={(e)=>onchange(Number(e.target.value))} className=' w-40 px-2 py-1 rounded-lg bg-white text-md text-black  font-medium outline-none'/>
    </div>
  )
}

export default InputGroup
