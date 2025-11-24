import React, { useState } from 'react'

function InputCategorie({ type, placeholder, value, onChange, dynamicDate = false }) {
  const [inputType, setInputType] = useState(type) // declartion du type et utilisation de useState pour que le type puisse changer dynamiquement

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
