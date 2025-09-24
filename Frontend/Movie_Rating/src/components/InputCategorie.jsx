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
        {/*onFocus => quand j'entre dans l'input*/}
        if (dynamicDate) setInputType('date')
      }}
      onBlur={() => {
        {/*onBlur => quand je sors de l'input*/}
        if (dynamicDate && !value) setInputType('text') // redevient text si vide
      }}
    />
  )
}

export default InputCategorie
