import React, { useState } from 'react'


const LandingLoginForm = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div> 123</div>
      <div>
        <form>
          <div>
            <input
              placeholder='Email'
              type='email'
            // value={email}
            />
          </div>
          <div>
            <input
              placeholder='Password'
              type='password'
            />
          </div>

        </form>

      </div>
    </>
  )

}

export default LandingLoginForm;