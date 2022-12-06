import React from 'react'
import { useSelector } from 'react-redux'

export default function Score() {

    
    const compScore = useSelector( (state) => state.compScore.value )

  return (
    <div>Player Score = {playerScore}  </div>
  )
}
