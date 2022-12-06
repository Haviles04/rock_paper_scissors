import React from 'react'
import { useSelector } from 'react-redux'

export default function Results() {

    const playerSelect = useSelector((state) => state.playerChoice.value);

  return (
    <div></div>
  )
}
