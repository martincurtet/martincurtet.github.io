import React from 'react'

export default function Section(props) {
  return (
    <div className='px-5 py-3 w-100'>
      
      <div className='d-flex align-items-center gap-2'>
        {props.icon}
        <span className='fw-bold text-primary'>{props.title}</span>
      </div>
      {props.children}
    </div>
  )
}
