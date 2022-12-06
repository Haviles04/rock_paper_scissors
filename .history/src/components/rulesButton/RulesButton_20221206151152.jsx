import React from 'react'
import { useDispatch } from 'react-redux'
import { showRules } from '../../features/showRulesSlice'

export default function RulesButton(){

    const dispatch = useDispatch();

 
    return (
      <div className='flex justify-center w-screen'>
        <button className='rounded-lg border-2 border-zinc-400 font-semibold text-zinc-200 text-lg w-[128px] h-[40px]' onClick={() => dispatch(showRules())}>Rules</button>
      </div>
    )

}
