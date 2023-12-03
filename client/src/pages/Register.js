import React, { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { useAppContext } from '../context/appContext';


const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState)
  // global state and useNavigate
 const toggleMember = () => {
    setValues({...values, isMember: !values?.isMember})
 }
 const {isLoading, showAlert, displayAlert} = useAppContext()
 
  const handleChange = (e) => {
    console.log(e.target)
    setValues({...values, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e)
    const {name, email, password, isMember} = values
    if(!email || !password || (!isMember && !name)) {
      displayAlert()
       return
    }
    console.log(values)
  }
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3 style={{ textAlign: "center" }}>{values?.isMember ? 'Login' : 'Register'}</h3>
        <br/>
        {showAlert && <Alert/>}
        {/* name input */}
        {!values?.isMember && (
        <FormRow type='text' name='name' value={values?.name} handleChange={handleChange} />
        )}
        {/* email input */}
        <FormRow type='email' name='email' value={values?.email} handleChange={handleChange} />
        {/* password input */}
        <FormRow type='password' name='password' value={values?.password} handleChange={handleChange} />

        <button type="submit" className='btn btn-block'>Submit</button>
        <p>
          <button type="button" onClick={toggleMember} className='member-btn'>{values?.isMember ? 'Are you not a member? Register' : 'If you are a member then Login'}</button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register