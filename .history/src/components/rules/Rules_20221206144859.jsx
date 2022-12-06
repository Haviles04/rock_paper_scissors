import React from 'react'
import { useSelector } from 'react-redux'

export default function Rules() {
    const hardMode = useSelector((state) => state.hardMode.value);
  
    return (
    <div>
        <img alt='rules' src={hardMode ?  :  }
    </div>
  )
}
