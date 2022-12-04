import React from 'react'
import { useSelector } from 'react-redux'

export default function Score() {

    const playerScore = useSelector( (state) => state.playerScore.value )
    const compScore = useSelector( (state) => state.compScore.value )

  return (
    <div>User Score = {playerScore} Computer Score = {compScore} </div>
  )
}
