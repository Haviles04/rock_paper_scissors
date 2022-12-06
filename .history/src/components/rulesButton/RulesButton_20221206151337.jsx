import React from 'react'
import { useDispatch } from 'react-redux'
import { setShowRules } from '../../features/showRulesSlice'
import { useSelector } from 'react-redux';

export default function RulesButton(){
    const showRules = useSelector((state) => state.showRules.value)
    const dispatch = useDispatch();

 
    return (
      <div className='flex justify-center w-screen'>
        <button className='rounded-lg border-2 border-zinc-400 font-semibold text-zinc-200 text-lg w-[128px] h-[40px]' onClick={() => dispatch(setShowRules())}>Rules</button>
      </div>
    )

}
