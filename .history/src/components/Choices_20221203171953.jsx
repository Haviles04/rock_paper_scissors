import React from 'react'
import { useSelector }  from 'react-redux';

export default function Choices() {

    const choices = useSelector((state) => state.choices.value);

  return (
    <>
    {choices.map((choice) => <div>
        <button className='m-1 flex justify-center border-2 border-black-800'>{choice.name}</button>
    </div>)}
    </>
  )
}


