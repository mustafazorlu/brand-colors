import React from 'react'
import { getContrastYIQ } from '../helpers'

const Copied = ({color}) => {
  return (
    <div className='copied' style={{backgroundColor:`#${color}`, color:`#${getContrastYIQ(color)}`}}>
        Copied #{color} the clipboard.
    </div>
  )
}

export default Copied

