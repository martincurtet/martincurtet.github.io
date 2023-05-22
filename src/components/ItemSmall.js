import React from 'react'
import { resumeData } from '../data'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'

export default function ItemSmall(props) {
  let itemData = resumeData.find(d => d.id === props.id)
  return (
    <div className='p-2 rounded'>
      {itemData&&
        // item title
        <div>
          {itemData.badge&& <span className='badge bg-primary text-uppercase'>{itemData.badge}</span>}
          {itemData.flag&& <span>{getUnicodeFlagIcon(itemData.flag)}</span>}
          <span className='fw-bold'>{" " + itemData.title}{itemData.description&& <span>:</span>} </span>
          <span>{itemData.description}</span>
        </div>
      }
    </div>
  )
}
