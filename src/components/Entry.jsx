import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'

export default function Entry({ parms }) {
  return (
    <div className='entry'>
      <div className='header'>
        <h2 className='name'>{parms.name}</h2>
        <p className='date'>
          <FaRegCalendarAlt />
          {parms.date}
        </p>
      </div>
      <p className='supplier'>{parms.supplier}</p>
      <div className='footer'>
        <p className='tags'>
          {parms.tags.map((tag) => (
            <div className='tag'>{tag}</div>
          ))}
        </p>
        <p className='cost' data-type={parms.type}>
          £{parms.cost}
        </p>
      </div>
    </div>
  )
}
