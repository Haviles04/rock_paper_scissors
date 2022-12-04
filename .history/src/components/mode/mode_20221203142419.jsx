import React from 'react'
import { useSelector } from 'react-redux'

export default function Mode() {
    
    const gameMode = useSelector( (state) => state.gameMode.value )
  
  return (
    <div>{gameMode}</div>
  )
}
