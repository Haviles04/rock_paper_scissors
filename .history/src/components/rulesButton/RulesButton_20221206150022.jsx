import React, { Component } from 'react'

export class RulesButton extends Component {
  render() {
    return (
      <div className='flex justify-center w-screen'>
        <button className='rounded border-2 border-grey-300 w-[125px] h-[50px]'>Rules</button>
      </div>
    )
  }
}

export default RulesButton