import React, { useState } from 'react'


const LandingLoginForm = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`email: ${email}
            password: ${password}`
    )
    props.history.push('/dashboard')
  }

  const handleInputChange1 = (e) => {
    e.persist();
    setEmail(e.target.value)
  }

  const handleInputChange2 = (e) => {
    e.persist();
    setPassword(e.target.value)
  }
  // console.log('LandingLoginFormInputs', email, password)

  return (
    <>
      <div
        className='login-hero'
      >asdasd
          <form onSubmit={handleSubmit}
          className='login-form'
        >
          <div
            className='login-email'>
            <input
              placeholder='Email'
              type='email'
              value={email}
              onChange={handleInputChange1}
            // value={email}
            />
          </div>
          <div
            className='login-password' >
            <input
              placeholder='Password'
              type='password'
              value={password}
              onChange={handleInputChange2}
            />
          </div>

          <button
            className='login-button'
            onClick={handleSubmit}
            type='submit'
          >Login</button>
        </form>
      </div>
    </>
  )

}

export default LandingLoginForm;