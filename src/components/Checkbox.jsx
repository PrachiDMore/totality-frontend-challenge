import React from 'react'

const Checkbox = ({label, onChange, id, htmlFor}) => {
  return (
    <div className='flex gap-2'>
      <input id={id} className='checkbox' onChange={onChange} type="checkbox" />
      <label className='font-medium' htmlFor={htmlFor} >{label}</label>
    </div>
  )
}

export default Checkbox
