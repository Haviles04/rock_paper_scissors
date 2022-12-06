import React, { Component } from 'react'

export class RulesButton extends Component {
  render() {
    return (
      <div className='flex justify-center w-screen'>
        <button className='rounded-md border-2 border-zinc-400 font-semibold text-zinc-200 text-lg w-[125px] h-[38px]'>Rules</button>
      </div>
    )
  }
}

export default RulesButton