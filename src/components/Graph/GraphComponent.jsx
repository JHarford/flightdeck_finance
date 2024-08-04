import React from 'react'
import { useState } from 'react'
import entries from '../../utils/generateRandomData'

const GraphComponent = ({ data }) => {
  const min = 0
  const max = 1000

  const points = entries
    .map((item, index) => {
      const x = (800 / entries.length) * index
      const y = 400 - (item.cost / max) * 400
      return `${x}, ${y}`
    })
    .join(' ')

  return (
    <div>
      <div className='graph-container'>
        <svg className='svg'>
          <polyline fill='none' stroke='grey' strokeWidth='1' points={points} />
        </svg>
        {entries.map((item, index) => (
          <div
            className='point'
            key={index}
            style={{
              bottom: `${(item.cost / max) * 100}%`,
              left: `${(100 / entries.length) * index}%`,
            }}
          >
            {/* {item.cost} */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default GraphComponent
