import React from 'react'
import { resumeData } from '../data'

export default function Item(props) {
  let itemData = resumeData.find(d => d.id === props.id)
  return (
    <div className='p-2 rounded'>
      {itemData&&
        // item title
        <div>
          {itemData.badge&& <span className='badge bg-primary text-uppercase'>{itemData.badge}</span>}
          <span className='fw-bold'>{" " + itemData.title} </span>
          <span>{itemData.company} - </span>
          <span>{itemData.location} | </span>
          <span>{itemData.start_date} - </span>
          <span>{itemData.end_date}</span>
        </div>
      }
      {itemData.subtitle&&
        // item subtitle
        <div className='text-dark'>{itemData.subtitle}</div>
      }
      {itemData&&
        // item block
        <div>{itemData.description}</div>
      }
    </div>
  )
}
