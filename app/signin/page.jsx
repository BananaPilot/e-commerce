"use client"

import React, { useEffect, useState } from 'react'
import {signIn} from 'next-auth/react'

function SignInPage() {

    useEffect(() => {
        checkURL()
    },[])

    const [visible, setVisible] = useState('none')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const checkURL = () => {
        if (window.location.search.includes("CredentialsSignin")) {
            setVisible("flex")
        }
    }

    const submitCredentials = () => {
        signIn( 'credentials', {
            email,
            password,
            callbackUrl: "/"
        })
    }

    const submitGoogle = () => {
        signIn( "google", {
            callbackUrl: "/"
        })
    }

    const submitGitHub = () => {
        signIn( "github", {
            callbackUrl: "/"
        })
    }

    const submit = (event) => {
        if (event.key === 'Enter'){
          submitCredentials()
        }
    }

  return (
    <>
    <head>
        <title>Sign in</title>
    </head>
    <div className='flex justify-center'>
        <div className='container'>
            <div className='flex justify-center text-center'>
                <div style={{display: visible}} className='alert'>Please make sure that your credentials are right before trying again</div>
            </div>
            <div className='grid justify-center'>
                <input onKeyPress={submit} onChange={(e) => setEmail(e.target.value)} className='input' type="email" placeholder='Enter your email'/>
                <input onKeyPress={submit} onChange={(e) => setPassword(e.target.value)} className='input' type="password" placeholder='Password'/>
            </div>
            <div className='flex justify-center'>
                <button onClick={() => {submitCredentials()}} className='text-white bg-violet-700 w-80 h-14 rounded-xl text-2xl font-bold hover:bg-violet-500'>Log in</button>
            </div>
            <div className='border-b border-gray-400 m-5'></div>
            <div className='flex justify-center'>
                <button onClick={() => {submitGoogle()}} ><img className='w-8 mx-5' src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/></button>
                <button onClick={() => {submitGitHub()}} ><img className='w-9 mx-5' src="https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg"/></button>
            </div>
            <div className='border-b border-gray-400 m-5'></div>
            <div className='flex justify-center'>
                <button onClick={() => {location.replace('/signup')}} className='text-white bg-green-600 w-80 h-14 rounded-xl text-2xl font-bold hover:bg-green-500' >Create new account</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default SignInPage