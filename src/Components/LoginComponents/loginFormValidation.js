import React from 'react'

function loginFormValidation(props) {
  return (
    <div>
        <p className='errorMessage'>
        {props.message}
        </p>
        <h2>Check</h2>
    </div>
    
  )
}

export default loginFormValidation