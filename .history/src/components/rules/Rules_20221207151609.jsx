import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import easyModeRules from '../../assets/images/image-rules.svg';
import hardModeRules from '../../assets/images/image-rules-bonus.svg';
import iconClose from '../../assets/images/icon-close.svg';
import { setShowRules } from '../../features/showRulesSlice';

export default function Rules() {
    const hardMode = useSelector((state) => state.hardMode.value);
    const showRules = useSelector((state) => state.showRules.value);

    const dispatch=useDispatch();
  
    return (
    <div className=' self-center absolute h-screen w-screen bg-white z-10 flex flex-col items-center justify-evenly text-center md:h-[600px] w-[600px]' >
        
        <div>
        <span className='text-3xl font-bold'>Rules</span></div>
        <div>
        <img  alt='rules' src={hardMode ? hardModeRules : easyModeRules} /></div>
        <div><button onClick={()=> dispatch(setShowRules(showRules))}><img alt='close' src={iconClose} /> </button></div>
        
    </div>
  )
}
