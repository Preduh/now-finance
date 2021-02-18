import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import api from '../api'
import { isAuthenticated } from '../auth'

import AuthForm from '../components/AuthForm/index'

const Login = () => {

    const [ verifyLogin, setVerifyLogin ] = useState(true)

    const handleLogin = async () => {
        const email = document.getElementsByName('email')[0].value
        const password = document.getElementsByName('password')[0].value

        const credentials = btoa(`${email}:${password}`)

        const { data } = await api.get('/auth/login', {
            headers: {
                'authorization': `Basic ${credentials}`
            }
        })

        if (!data.Error) {
            localStorage.setItem('TOKEN', data.token)
            setVerifyLogin(false)
        } else {
            setVerifyLogin(true)
        }
    }

    return (
        <>
        <AuthForm  doLogin={handleLogin} />
        {verifyLogin ? '' : <Redirect to={{ pathname: '/home' }} />}
        {isAuthenticated() ? <Redirect to={{ pathname: '/home' }} /> : ''}
        </>
    )
}

export default Login