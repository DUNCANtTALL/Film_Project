import React, { useState } from 'react'

function InputCategorie({ type, placeholder, value, onChange, dynamicDate }) {
  const [inputType, setInputType] = useState(type)

  return (
    <input
      type={inputType}
      className='InputCategorie'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onFocus={() => {
        if (dynamicDate) setInputType('date')
      }}
      onBlur={() => {
        if (dynamicDate && !value) setInputType('text') // redevient text si vide
      }}
    />
  )
}

export default InputCategorie
