import styled from 'styled-components'

export const Container = styled.div`
    width: 76%;
    height: 100%;
    margin-left: 12%;
    display: flex;
    justify-content: center;

    .transactions-register-form {
        width: 70%;
        height: 300px;
        margin-top: -40px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-color: white;
        border-radius: 10px;
        box-shadow: 2px 2px 8px rgb(69, 69, 69, 0.5);
    }

    .transactions-register-form button, .transactions-register-form input {
        width: 80%;
    }

    .transactions-register-form button {
        height: 40px;
        border: none;
        background-color: #FF872C;
        color: white;
        margin-top: 25px;
        outline: none;
        cursor: pointer;
    }

    .transactions-register-form input {
        border: none;
        border-bottom: 1px solid #5636D3;
        padding: 10px 5px;
        outline: none;
        font-size: 16px;
        margin-bottom: 25px;
    }

    .transactions-register-form input::-webkit-input-placeholder {
        color: #8F85B5;
    }

    .registerInput::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
`