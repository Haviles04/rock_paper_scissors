import React from 'react'
import { useSelector } from 'react-redux';
import easyModeRules from '../../assets/images/image-rules.svg';
import hardModeRules from '../../assets/images/image-rules-bonus.svg';
import iconClose from '../../assets/images/icon-close.svg';

export default function Rules() {
    const hardMode = useSelector((state) => state.hardMode.value);
  
    return (
    <div className=' absolute h-screen w-screen bg-white z-10 flex flex-col items-center justify-evenly text-center' >
        <div>
        <div>
        <span className='text-3xl font-bold'>Rules</span></div>
        <img  alt='rules' src={hardMode ? easyModeRules : hardModeRules} />
        <button><img alt='close' src={iconClose} /> </button>
        </div>
    </div>
  )
}
