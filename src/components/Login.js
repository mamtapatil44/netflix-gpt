import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm ,setIsSignInForm] =useState(true)
  const toggleSignInForm =()=>{
 setIsSignInForm(!isSignInForm)
  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img alt="logo" src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
        </div>
    <form className='absolute w-3/12 p-12 bg-black mx-auto left-0 right-0 my-36 rounded-lg text-white bg-opacity-80'>
      <h1 className='font-bold text-3xl py-4'>Sign In</h1>
      {!isSignInForm && <input type='text' placeholder='First Name' className='p-2 m-2 w-full bg-gray-700'/>}
      <input type='text' placeholder='Email Address' className='p-2 m-2 w-full bg-gray-700' />
      <input type='password' placeholder='Password' className='p-2 m-2 w-full  bg-gray-700'/>
      <button className='p-2 m-2 bg-red-700 rounded-sm w-full'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
      <p className='p-2 m-4' onClick={toggleSignInForm}>{isSignInForm ? 'New To Netflix? Sign Up Now' : ''}</p>
    </form>
    </div>
  )
}

export default Login