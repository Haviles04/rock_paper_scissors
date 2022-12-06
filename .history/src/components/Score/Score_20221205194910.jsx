import React from 'react'
import { useSelector } from 'react-redux'

export default function Score() {

    const playerScore = useSelector( (state) => state.playerScore.value )
 

  return (
    <div>Player Score = {playerScore}  </div>
  )
}
