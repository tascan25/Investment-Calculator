import React from 'react'
import { calculateInvestmentResults } from '../util/investment'
import { formatter } from '../util/investment'

function Results({initialInvestment, annualInvestment, expectedReturn, duration}) {
  const userInput = {
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration
  }
  const result = calculateInvestmentResults(userInput)
  const initialinvestment = result[0].valueEndOfYear-result[0].interest-result[0].annualInvestment
  return (
    <table className='table-auto p-2 bg-gray-900 mb-5 rounded-lg min-[350px]:ml-6 min-[350px]:p-5 min-[350px]:mb-3 min-[400px]:ml-2 shadow-md shadow-gray-600'>
      <thead>
        <tr>
          <th className="px-4 py-2 text-green-300 min-[350px]:text-xs">Year</th>
          <th className="px-4 py-2 text-green-300 min-[350px]:text-xs">Investment Value</th>
          <th className="px-4 py-2 text-green-300 min-[350px]:text-xs">Interest (Year)</th>
          <th className="px-4 py-2 text-green-300 min-[350px]:text-xs">Total Interest</th>
          <th className="px-4 py-2 text-green-300 min-[350px]:text-xs">Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {result.map((yearRes) => {
          const totalInterest = yearRes.valueEndOfYear - yearRes.annualInvestment * yearRes.year-initialinvestment
          const totalAmountInvested = yearRes.valueEndOfYear-totalInterest
          return (
            <tr key={yearRes.year}>
              <td className="px-4 py-2 font-semibold min-[350px]:text-xs">{yearRes.year}</td>
              <td className="px-4 py-2 font-semibold min-[350px]:text-xs">{formatter.format(yearRes.valueEndOfYear)}</td>
              <td className="px-4 py-2 font-semibold min-[350px]:text-xs">{formatter.format(yearRes.interest)}</td>
              <td className="px-4 py-2 font-semibold min-[350px]:text-xs">{formatter.format(totalInterest)}</td>
              <td className="px-4 py-2 font-semibold min-[350px]:text-xs">{formatter.format(totalAmountInvested)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Results
