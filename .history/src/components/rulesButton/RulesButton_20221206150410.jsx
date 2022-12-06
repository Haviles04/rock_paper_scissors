import React, { Component } from 'react'

export class RulesButton extends Component {
  render() {
    return (
      <div className='flex justify-center w-screen'>
        <button className='rounded-md border-2 border-lightgrey-500 font-semibold text-white text-lg w-[125px] h-[38px]'>Rules</button>
      </div>
    )
  }
}

export default RulesButton