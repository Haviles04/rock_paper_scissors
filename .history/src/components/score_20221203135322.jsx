import React from 'react'
import { useSelector } from 'react-redux'

export default function Score() {

    const userScore = useSelector( (state) => state.userScore.value )

  return (
    <div>{userScore}</div>
  )
}
