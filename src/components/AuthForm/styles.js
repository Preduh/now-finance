import styled from 'styled-components'

export const Container = styled.div`
    width: 500px;
    padding: 30px 0;
    background-color: #5636D3;
    border-radius: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: 2px 2px 8px #1D202B;
    position: absolute;
    left: 50%;
    top: 25%;
    transform: translateX(-50%);

    h1 {
        color: #FFFFFF;
        font-size: 34px;
    }

    input, button {
        width: 80%;
        height: 28px;
        border: none;
        outline: none;
        border-radius: 4px;
    }

    input {
        padding: 8px;
        margin-top: 20px;
        font-size: 16px;
    }

    input:focus {
        background-color: #D6D6D6;
    }

    button {
        background-color: #FF872C;
        margin-top: 24px;
        color: white;
        font-size: 16px;
        font-weight: 550;
        cursor: pointer;
    }

    button:hover {
        background-color: #DA6A14;
    }

    button:active {
        transform: scale(0.98);
    }
`