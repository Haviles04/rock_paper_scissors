import React from 'react'
import { useSelector }  from 'react-redux';

export default function Choices() {

    const choices = useSelector((state) => state.choices.value);

  return (
    <div>Choices</div>
  )
}

