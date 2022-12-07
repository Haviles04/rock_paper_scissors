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
    <div className='absolute h-screen w-screen bg-white z-10 flex flex-col items-center justify-evenly md:justify-center text-center md:h-[600px] md:w-[600px] md:relative md:self-center md:rounded-xl md:flex-row' >
        
        <div className=' md:ml-10'>
        <span className=' text-3xl font-bold'>Rules</span></div>
        <div className='md:order-last md:self-end' >
        <img  alt='rules' src={hardMode ? hardModeRules : easyModeRules} /></div>
        <div className=' md:mr-10 md:justify-self-end'><button onClick={()=> dispatch(setShowRules(showRules))}><img alt='close' src={iconClose} /> </button></div> 
        
    </div>
  )
}
