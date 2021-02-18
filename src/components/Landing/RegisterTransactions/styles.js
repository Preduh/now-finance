import styled from 'styled-components'

export const Container = styled.div`
    width: 76%;
    height: 100%;
    margin-left: 12%;
    display: flex;
    justify-content: center;
    background-color: blue;

    form {
        background-color: red;
        width: 50%;
        height: 200px;
        margin-top: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    form button, input {
        width: 50%;
    }
`