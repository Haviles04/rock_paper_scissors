import React from 'react'
import { useSelector } from 'react-redux'

export default function Score() {

    const playerScore = useSelector( (state) => state.playerScore.value )
 

  return (
    <div className='bg-white h-20'>Player Score = {playerScore}  </div>
  )
}
