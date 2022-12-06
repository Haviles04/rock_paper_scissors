import React, { Component } from 'react'
import { showRules } from '../../features/showRulesSlice'

export class RulesButton extends Component {
  render() {
    return (
      <div className='flex justify-center w-screen'>
        <button className='rounded-lg border-2 border-zinc-400 font-semibold text-zinc-200 text-lg w-[128px] h-[40px]' onClick={() => showRules}>Rules</button>
      </div>
    )
  }
}

export default RulesButton