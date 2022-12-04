import React from 'react'
import { useSelector }  from 'react-redux';

export default function Choices() {

    const choices = useSelector((state) => state.choices.value);

  return (
    <>
    {choices.map((choice) => <div>
        <button className='m-1 p-5 flex justify-center border-2 border-neutral-900 rounded-full '>{choice.name}</button>
    </div>)}
    </>
  )
}


