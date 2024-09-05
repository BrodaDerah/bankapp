<<<<<<< HEAD
'use client';

import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp 
        decimals={2}
        decimal=","
        prefix="$"
        end={amount} 
      />
=======
'use client'

import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number}) => {
  return (
    <div className="w-full">
        <CountUp 
            decimals={2}
            prefix="$"
            end={amount} 
        />
>>>>>>> c9e8cf8aaa033d58c055d64e9093caeea0157902
    </div>
  )
}

export default AnimatedCounter