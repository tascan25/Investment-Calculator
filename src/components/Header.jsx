import React from 'react'
import logo from '../assets/investment-calculator-logo.png'
function Header() {
  return (
    <header>
    <div className='flex flex-col gap-2 justify-center items-center m-2 min-[350px]:ml-10'>
      <img src={logo} alt="logo_img" className=' w-40'/>
      <h2 className='font-semibold text-3xl min-[350px]:text-2xl'>Investment Calculator</h2>
    </div>
    </header>
  )
}

export default Header
