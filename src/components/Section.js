import React from 'react'

export default function Section(props) {
  return (
    <div className='px-5 py-3 w-100 my-5 border-top border-bottom d-flex flex-column gap-2'>
      
      <div className='d-flex align-items-center gap-2 fw-bold'>
        {props.icon}{props.title}
      </div>
      {props.children}
    </div>
  )
}
