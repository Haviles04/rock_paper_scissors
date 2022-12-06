import React from 'react'
import { useSelector } from 'react-redux';
import easyModeRules from '../../assets/images/image-rules.svg';
import hardModeRules from '../../assets/images/image-rules-bonus.svg';

export default function Rules() {
    const hardMode = useSelector((state) => state.hardMode.value);
  
    return (
    <div className=' absolute h-screen w-screen bg-white z-10 flex justify-center items-center text-center' >
        <div>
        <span className='text-3xl font-bold'>Rules</span>
        <img className='mt-20' alt='rules' src={hardMode ? easyModeRules : hardModeRules} />
        </div>
    </div>
  )
}
