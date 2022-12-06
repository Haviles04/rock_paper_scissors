import React from 'react'
import { useSelector } from 'react-redux'

export default function Score() {

    const playerScore = useSelector( (state) => state.playerScore.value )
 

  return (
    <div className='bg-white h-[75px] w-[75px]'>Player Score = {playerScore}  </div>
  )
}
