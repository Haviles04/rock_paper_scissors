import React from 'react'
import { useSelector } from 'react-redux';
import easyModeRules from '../../assets/images/image-rules.svg';
import hardModeRules from '../../assets/images/image-rules-bonus.svg';
import iconClose from '../../assets/images/icon-close.svg';

export default function Rules() {
    const hardMode = useSelector((state) => state.hardMode.value);
  
    return (
    <div className=' absolute h-screen w-screen bg-white z-10 flex justift-center text-center' >
        <div>
        <span className='text-3xl font-bold'>Rules</span>
        <img  alt='rules' src={hardMode ? easyModeRules : hardModeRules} />
        <button><img alt='close' src={iconClose} /> </button>
        </div>
    </div>
  )
}
