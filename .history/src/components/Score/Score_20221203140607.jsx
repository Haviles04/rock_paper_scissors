import React from 'react'
import { useSelector } from 'react-redux'

export default function Score() {

    const userScore = useSelector( (state) => state.userScore.value )
    const compScore = useSelector( (state) => state.compScore.value )

  return (
    <div>User Score = {userScore} Computer Score = {compScore} </div>
  )
}
