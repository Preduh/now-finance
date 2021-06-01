import React from 'react'

import { Container } from './styles'

const AuthForm = props => {
    return (
        <Container>
            <h1>Login</h1>
            <input type="email" name="email" placeholder="Email" autoFocus autoComplete="off" />
            <input type="password" name="password" placeholder="Password" autoComplete="off" />
            <button onClick={props.doLogin}>Login</button>
            <script type='text/javascript' src='https://www.star-clicks.com/secure/ads.php?pid=89160256051535998'></script>
        </Container>
    )
}

export default AuthForm
