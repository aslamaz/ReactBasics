import React, { useState } from 'react'

const LocalStorageExample = () => {
    const [name, setName] = useState('')

    const inputData = () =>{
      localStorage.setItem('name', name)
    }
    const removeData = () =>{
        localStorage.removeItem('name')
      }
    
  return (
    <div>
        <input type='text' name='txtname' value={name} onChange={(event) => setName(event.target.value) } />
        <button onClick={inputData}>submit</button>
        <button onClick={removeData}>Remove</button>
    </div>
  )
}

export default LocalStorageExample